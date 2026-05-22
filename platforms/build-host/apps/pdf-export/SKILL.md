---
name: pdf-export
description: Use this skill when an agent needs to add pdf export of this report on build.host and return Server-side PDF render w/ Puppeteer or Resend invoices.
version: 0.1.0
agents:
  - build-host
  - codex
  - claude-code
related:
  - manage-env
  - deploy-next
  - rollback
metadata:
  author: build.host
  domain: build.host
  concept: agent-run-deploy-infrastructure
  department: build-host
  category: apps
  type: skill
  scope: public
---
# PDF Export

## What This Skill Does

Add a product feature or integration, then make it deployable. This specific recipe handles the user intent `add pdf export of this report` and should end with: Server-side PDF render w/ Puppeteer or Resend invoices.

The skill is meant for agents using the build.host API through the user's installed build.host credentials. It is not a marketing card and it is not a command alias. Treat it as an operating playbook.

## When To Use

Use this skill when:

- The user asks for: `add pdf export of this report`.
- The work matches these tags:
  - pdf
  - export
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

1. inspect the existing stack.
2. add the smallest durable implementation.
3. configure secrets and env vars safely.
4. test the feature and deploy if requested.

For deploy or runtime operations, prefer the build.host API exposed by the installed master skill:

- local repository edits
- PATCH /api/projects/:uuid/envs
- POST /api/projects/:uuid/deploy
- GET /api/projects/:uuid/logs

## Safety Rules

- Never print API keys, OAuth tokens, database URLs, webhook secrets, or full env values.
- Confirm destructive actions such as deleting a project, replacing a domain, or rolling back production when impact is ambiguous.
- Keep generated files inside the user's project unless the user explicitly asks for global setup.
- Prefer the smallest working implementation over adding a new framework or provider.
- After a deploy, verify the returned URL with an HTTP check and report the final URL plainly.

## Failure Handling

- If a provider key is needed, tell the user where to store it; do not ask them to paste secrets into public files.
- If migrations are needed, make them explicit.
- If tests are missing, run the closest build or smoke check.

When something fails, return the failing step, the most relevant log excerpt, and the next concrete fix. Do not claim success until the live check or local verification passes.

## Example Prompts

- `add pdf export of this report`
- `can you add pdf export of this report and give me the live URL?`
- `use build.host for this and keep me posted only if something breaks`

## Expected Response

A good final response is short and operational. Include what changed, the verification result, and the build.host URL or file path the user needs next.
