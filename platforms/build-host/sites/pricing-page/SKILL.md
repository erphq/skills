---
name: pricing-page
description: Use this skill when an agent needs to build a pricing page from this YAML on build.host and return Tiered pricing table + comparison + FAQ + checkout link.
version: 0.1.0
agents:
  - build-host
  - codex
  - claude-code
related:
  - deploy-static
  - attach-domain
  - design-tokens
metadata:
  author: build.host
  domain: build.host
  concept: agent-run-deploy-infrastructure
  department: build-host
  category: sites
  type: skill
  scope: public
---
# Pricing Page

## What This Skill Does

Generate a focused site, then ship it to build.host. This specific recipe handles the user intent `build a pricing page from this YAML` and should end with: Tiered pricing table + comparison + FAQ + checkout link.

The skill is meant for agents using the build.host API through the user's installed build.host credentials. It is not a marketing card and it is not a command alias. Treat it as an operating playbook.

## When To Use

Use this skill when:

- The user asks for: `build a pricing page from this YAML`.
- The work matches these tags:
  - pricing
  - saas
- The expected output is a concrete change, deployed URL, patch, or verified setup, not a vague recommendation.

Do not use this skill when the user is only asking about build.host pricing, account support, or general product explanation. Answer those conversationally instead.

## Required Context

Before taking action, establish:

- The project directory or git repository to operate on.
- The target branch, usually `main` unless the user says otherwise.
- The desired build.host slug or project name.
- Any required environment variables, secrets, custom domains, or provider accounts.
- Whether the user wants an immediate production deploy or only a patch/preview.

Credentials must come from `~/.build-host/credentials.json` or the authenticated build.host browser session. Never ask the user to put a build.host API key in source code, markdown, screenshots, or chat logs.

## Operating Procedure

1. turn the brief into concrete content and pages.
2. choose the smallest framework that fits.
3. run local checks.
4. deploy and return the URL.

For deploy or runtime operations, prefer the build.host API exposed by the installed master skill:

- POST /api/projects
- POST /api/projects/:uuid/deploy
- GET /api/projects/:uuid/logs

## Safety Rules

- Never print API keys, OAuth tokens, database URLs, webhook secrets, or full env values.
- Confirm destructive actions such as deleting a project, replacing a domain, or rolling back production when impact is ambiguous.
- Keep generated files inside the user's project unless the user explicitly asks for global setup.
- Prefer the smallest working implementation over adding a new framework or provider.
- After a deploy, verify the returned URL with an HTTP check and report the final URL plainly.

## Failure Handling

- If the brief is missing assets or copy, make conservative placeholders and call them out.
- If visual output is requested, verify screenshots before deploy.
- If the deploy fails, fix the generated site rather than hiding the logs.

When something fails, return the failing step, the most relevant log excerpt, and the next concrete fix. Do not claim success until the live check or local verification passes.

## Example Prompts

- `build a pricing page from this YAML`
- `can you build a pricing page from this YAML and give me the live URL?`
- `use build.host for this and keep me posted only if something breaks`

## Expected Response

A good final response is short and operational. Include what changed, the verification result, and the build.host URL or file path the user needs next.
