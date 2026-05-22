---
name: scramble-rotator
description: Use this skill when an agent needs to cycling scramble headline on build.host and return Glitch-scramble word rotator, pure DOM, prefers-reduced-motion.
version: 0.1.0
agents:
  - build-host
  - codex
  - claude-code
related:
  - design-tokens
  - dark-mode
  - deploy-static
metadata:
  author: build.host
  domain: build.host
  concept: agent-run-deploy-infrastructure
  department: build-host
  category: design
  type: skill
  scope: public
---
# Scramble Rotator

## What This Skill Does

Apply a visual system to an existing app or new surface. This specific recipe handles the user intent `cycling scramble headline` and should end with: Glitch-scramble word rotator, pure DOM, prefers-reduced-motion.

The skill is meant for agents using the build.host API through the user's installed build.host credentials. It is not a marketing card and it is not a command alias. Treat it as an operating playbook.

## When To Use

Use this skill when:

- The user asks for: `cycling scramble headline`.
- The work matches these tags:
  - motion
  - type
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

1. read the current UI and constraints.
2. apply the requested style with reusable tokens.
3. check responsive and accessibility states.
4. ship or summarize the patch.

For deploy or runtime operations, prefer the build.host API exposed by the installed master skill:

- local repository edits
- optional POST /api/projects/:uuid/deploy after user approval

## Safety Rules

- Never print API keys, OAuth tokens, database URLs, webhook secrets, or full env values.
- Confirm destructive actions such as deleting a project, replacing a domain, or rolling back production when impact is ambiguous.
- Keep generated files inside the user's project unless the user explicitly asks for global setup.
- Prefer the smallest working implementation over adding a new framework or provider.
- After a deploy, verify the returned URL with an HTTP check and report the final URL plainly.

## Failure Handling

- If the style conflicts with an existing design contract, preserve the local contract first.
- If animation is used, respect prefers-reduced-motion.
- If text clips or overlaps, fix layout before calling the work done.

When something fails, return the failing step, the most relevant log excerpt, and the next concrete fix. Do not claim success until the live check or local verification passes.

## Example Prompts

- `cycling scramble headline`
- `can you cycling scramble headline and give me the live URL?`
- `use build.host for this and keep me posted only if something breaks`

## Expected Response

A good final response is short and operational. Include what changed, the verification result, and the build.host URL or file path the user needs next.
