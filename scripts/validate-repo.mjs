#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function rel(file) {
  return relative(ROOT, file).split("/").join("/");
}

function fail(message) {
  failures.push(message);
}

function walk(dir, predicate, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, predicate, out);
    } else if (predicate(full, entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function stripYamlScalar(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) {
    return { data: {}, body: text, hasFrontmatter: false, closed: false };
  }

  const end = text.indexOf("\n---", 4);
  if (end === -1) {
    return { data: {}, body: text, hasFrontmatter: true, closed: false };
  }

  const yaml = text.slice(4, end);
  const body = text.slice(end + 4).replace(/^\n/, "");
  const data = {};
  let currentKey = null;
  let currentMode = null;

  for (const rawLine of yaml.split("\n")) {
    const line = rawLine.trimEnd();
    if (!line || line.trimStart().startsWith("#")) continue;
    const indent = line.length - line.trimStart().length;

    if (indent === 0) {
      const colonAt = line.indexOf(":");
      if (colonAt === -1) continue;
      const key = line.slice(0, colonAt).trim();
      const value = line.slice(colonAt + 1).trim();
      if (value === "") {
        currentKey = key;
        currentMode = null;
      } else {
        data[key] = stripYamlScalar(value);
        currentKey = null;
        currentMode = null;
      }
      continue;
    }

    if (!currentKey) continue;
    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      if (currentMode === null) {
        currentMode = "list";
        data[currentKey] = [];
      }
      if (currentMode === "list") {
        data[currentKey].push(stripYamlScalar(trimmed.slice(2).trim()));
      }
      continue;
    }

    if (currentMode === null) {
      currentMode = "object";
      data[currentKey] = {};
    }
    if (currentMode === "object") {
      const colonAt = trimmed.indexOf(":");
      if (colonAt !== -1) {
        const key = trimmed.slice(0, colonAt).trim();
        const value = trimmed.slice(colonAt + 1).trim();
        data[currentKey][key] = stripYamlScalar(value);
      }
    }
  }

  return { data, body, hasFrontmatter: true, closed: true };
}

function validateFrontmatterPlainScalars() {
  const markdownFiles = walk(ROOT, (file) => extname(file) === ".md").sort();

  for (const file of markdownFiles) {
    const text = readFileSync(file, "utf8");
    if (!text.startsWith("---\n")) continue;

    const path = rel(file);
    const end = text.indexOf("\n---", 4);
    if (end === -1) {
      fail(`${path}: unclosed YAML frontmatter`);
      continue;
    }

    const yaml = text.slice(4, end);
    yaml.split("\n").forEach((rawLine, index) => {
      const trimmed = rawLine.trim();
      if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("- ")) return;

      const colonAt = trimmed.indexOf(":");
      if (colonAt === -1) return;

      const value = trimmed.slice(colonAt + 1).trim();
      if (
        !value ||
        value === "|" ||
        value === ">" ||
        value.startsWith('"') ||
        value.startsWith("'") ||
        value.startsWith("[") ||
        value.startsWith("{")
      ) {
        return;
      }

      if (value.includes(": ")) {
        fail(`${path}: quote YAML scalar on frontmatter line ${index + 2} because it contains ": "`);
      }
    });
  }
}

function validateSkillFiles() {
  const skillFiles = walk(ROOT, (_file, name) => name === "SKILL.md").sort();
  const bySlug = new Map();
  const enterpriseDeptSlugs = new Map();

  for (const file of skillFiles) {
    const text = readFileSync(file, "utf8");
    const parsed = parseFrontmatter(text);
    const path = rel(file);

    if (!parsed.hasFrontmatter) fail(`${path}: missing YAML frontmatter`);
    if (parsed.hasFrontmatter && !parsed.closed) fail(`${path}: unclosed YAML frontmatter`);
    for (const field of ["name", "description", "version"]) {
      if (!parsed.data[field]) fail(`${path}: missing frontmatter field "${field}"`);
    }
    for (const field of ["author", "domain", "type", "scope"]) {
      if (!parsed.data.metadata?.[field]) {
        fail(`${path}: missing frontmatter field "metadata.${field}"`);
      }
    }
    if (!/^# /m.test(parsed.body)) fail(`${path}: missing H1 heading`);
    if (parsed.data.agents && !Array.isArray(parsed.data.agents)) {
      fail(`${path}: agents must be a YAML list`);
    }
    if (parsed.data.related && !Array.isArray(parsed.data.related)) {
      fail(`${path}: related must be a YAML list`);
    }

    const slug = parsed.data.name ?? dirname(file).split("/").pop();
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push(path);

    const parts = path.split("/");
    if (parts[0] === "departments" && parts[2] === "03-org-1k-plus") {
      if (!enterpriseDeptSlugs.has(slug)) enterpriseDeptSlugs.set(slug, []);
      enterpriseDeptSlugs.get(slug).push(path);
    }
  }

  for (const [slug, paths] of enterpriseDeptSlugs) {
    if (paths.length > 1) {
      fail(`lab-sites enterprise slug "${slug}" is duplicated:\n  ${paths.join("\n  ")}`);
    }
  }

  for (const file of skillFiles) {
    const parsed = parseFrontmatter(readFileSync(file, "utf8"));
    if (!Array.isArray(parsed.data.related)) continue;
    for (const target of parsed.data.related) {
      if (!bySlug.has(target)) {
        fail(`${rel(file)}: related target "${target}" does not resolve to any SKILL.md`);
      }
    }
  }

  return skillFiles.length;
}

function extractMarkdownLinks(text) {
  const links = [];
  const re = /\[[^\]]*]\(([^)]+)\)/g;
  let match;
  while ((match = re.exec(text))) links.push(match[1].trim());
  return links;
}

function validateMarkdownLinks() {
  const markdownFiles = walk(ROOT, (file) => extname(file) === ".md").sort();
  let checked = 0;
  for (const file of markdownFiles) {
    const text = readFileSync(file, "utf8");
    for (const rawHref of extractMarkdownLinks(text)) {
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("http://") ||
        rawHref.startsWith("https://") ||
        rawHref.startsWith("mailto:")
      ) {
        continue;
      }
      const href = rawHref.split("#")[0];
      if (!href) continue;
      checked += 1;
      const target = resolve(dirname(file), href);
      if (!existsSync(target)) {
        fail(`${rel(file)}: broken Markdown link "${rawHref}"`);
      }
    }
  }
  return checked;
}

function validateHtmlLinks() {
  const htmlFiles = walk(ROOT, (file) => extname(file) === ".html").sort();
  let checked = 0;
  for (const file of htmlFiles) {
    const text = readFileSync(file, "utf8");
    const re = /href="([^"]+)"/g;
    let match;
    while ((match = re.exec(text))) {
      const rawHref = match[1].trim();
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("http://") ||
        rawHref.startsWith("https://") ||
        rawHref.startsWith("mailto:")
      ) {
        continue;
      }
      const href = rawHref.split("#")[0];
      if (!href) continue;
      checked += 1;
      const target = resolve(dirname(file), href);
      if (!existsSync(target)) {
        fail(`${rel(file)}: broken HTML link "${rawHref}"`);
      }
    }
  }
  return checked;
}

function validateTextHygiene() {
  const files = walk(ROOT, (file) => !file.includes(`${ROOT}/.git/`)).sort();
  const legacyBrand = new RegExp(`\\b${"sd"}${"stack"}\\b`, "i");
  const liveTokenExamples = new RegExp(`(${"sk"}_${"live"}_|${"erp"}_${"live"}_${"sk"}_)`);

  for (const file of files) {
    const path = rel(file);
    if (path === ".gitleaks.toml") continue;
    const text = readFileSync(file, "utf8");
    if (legacyBrand.test(text)) fail(`${path}: remove legacy brand reference`);
    if (liveTokenExamples.test(text)) {
      fail(`${path}: replace live-looking example token with placeholder syntax`);
    }
  }
}

validateFrontmatterPlainScalars();
const skillCount = validateSkillFiles();
const markdownLinkCount = validateMarkdownLinks();
const htmlLinkCount = validateHtmlLinks();
validateTextHygiene();

if (failures.length > 0) {
  console.error(`Repo validation failed with ${failures.length} issue(s):`);
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log(`OK: ${skillCount} skill files validated`);
console.log("OK: Markdown frontmatter scalars validated");
console.log(`OK: ${markdownLinkCount} Markdown links validated`);
console.log(`OK: ${htmlLinkCount} HTML links validated`);
console.log("OK: lab-sites enterprise department slugs are unique");
console.log("OK: no legacy brand references or live-looking example tokens in current files");
