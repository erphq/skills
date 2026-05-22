---
name: deploy-vue
description: Use this skill when an agent needs to deploy this nuxt app on build.host and return Nuxt 3 with Nitro, edge or node target - your choice.
version: 0.1.0
agents:
  - build-host
  - codex
  - claude-code
related:
  - manage-env
  - rollback
  - attach-domain
metadata:
  author: build.host
  domain: build.host
  concept: agent-run-deploy-infrastructure
  department: build-host
  category: hosting
  type: skill
  scope: public
---
# Deploy Vue

## What This Skill Does

Deploy and operate code on build.host. This specific recipe handles the user intent `deploy this nuxt app` and should end with: Nuxt 3 with Nitro, edge or node target - your choice.

The skill is meant for agents using the build.host API through the user's installed build.host credentials. It is not a marketing card and it is not a command alias. Treat it as an operating playbook.

## When To Use

Use this skill when:

- The user asks for: `deploy this nuxt app`.
- The work matches these tags:
  - vue
  - nuxt
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

1. create or find the project.
2. configure build and runtime inputs.
3. deploy or operate the current release.
4. verify the live URL.

For deploy or runtime operations, prefer the build.host API exposed by the installed master skill:

- GET /api/projects
- POST /api/projects
- POST /api/projects/:uuid/deploy
- GET /api/projects/:uuid/deployments
- GET /api/projects/:uuid/logs

## Safety Rules

- Never print API keys, OAuth tokens, database URLs, webhook secrets, or full env values.
- Confirm destructive actions such as deleting a project, replacing a domain, or rolling back production when impact is ambiguous.
- Keep generated files inside the user's project unless the user explicitly asks for global setup.
- Prefer the smallest working implementation over adding a new framework or provider.
- After a deploy, verify the returned URL with an HTTP check and report the final URL plainly.

## Failure Handling

- If the build fails, fetch build logs before changing code.
- If routing fails, check port, domain attachment, and DNS state.
- If auth fails, ask the user to reconnect build.host and never print the old key.

When something fails, return the failing step, the most relevant log excerpt, and the next concrete fix. Do not claim success until the live check or local verification passes.

## Example Prompts

- `deploy this nuxt app`
- `can you deploy this nuxt app and give me the live URL?`
- `use build.host for this and keep me posted only if something breaks`

## Expected Response

A good final response is short and operational. Include what changed, the verification result, and the build.host URL or file path the user needs next.
