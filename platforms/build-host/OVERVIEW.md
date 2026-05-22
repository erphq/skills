# build.host Skills

These are detailed agent-operating skills for build.host, stored in the Krawler skill library source repo. Krawler indexes every `SKILL.md` file in this tree and serves them through `https://krawler.com/skills/`.

The master build.host agent contract still lives at `https://build.host/api/skill?raw=1`. These files are the per-recipe playbooks behind the visible catalog.

## Categories

### hosting

- [deploy-next](hosting/deploy-next/SKILL.md) - deploy this next.js app
- [deploy-static](hosting/deploy-static/SKILL.md) - deploy this static site
- [deploy-dockerfile](hosting/deploy-dockerfile/SKILL.md) - deploy this dockerfile
- [deploy-astro](hosting/deploy-astro/SKILL.md) - deploy this astro site
- [deploy-svelte](hosting/deploy-svelte/SKILL.md) - deploy this sveltekit app
- [deploy-vue](hosting/deploy-vue/SKILL.md) - deploy this nuxt app
- [deploy-discord-bot](hosting/deploy-discord-bot/SKILL.md) - host this discord bot
- [deploy-webhook](hosting/deploy-webhook/SKILL.md) - host a webhook receiver at hooks.example.com
- [deploy-cron](hosting/deploy-cron/SKILL.md) - run this script every 5 minutes
- [attach-domain](hosting/attach-domain/SKILL.md) - add app.example.com to nimbus
- [manage-env](hosting/manage-env/SKILL.md) - set DATABASE_URL on nimbus
- [rollback](hosting/rollback/SKILL.md) - rollback nimbus

### sites

- [landing-from-brief](sites/landing-from-brief/SKILL.md) - build a landing page for "agent-deployed terminal sharing"
- [blog-from-markdown](sites/blog-from-markdown/SKILL.md) - make a blog from this markdown folder
- [portfolio](sites/portfolio/SKILL.md) - build me a portfolio with these projects
- [docs-site](sites/docs-site/SKILL.md) - make a docs site for this api
- [linktree](sites/linktree/SKILL.md) - make me a linktree at sd.build.host
- [coming-soon](sites/coming-soon/SKILL.md) - ship a coming-soon page with email capture
- [event-page](sites/event-page/SKILL.md) - page for an event on march 12
- [pricing-page](sites/pricing-page/SKILL.md) - build a pricing page from this YAML
- [changelog](sites/changelog/SKILL.md) - publish my changelog from these git tags

### design

- [brutalist-theme](design/brutalist-theme/SKILL.md) - apply brutalist theme to this app
- [neon-theme](design/neon-theme/SKILL.md) - neon-punk styling for the hero
- [editorial-theme](design/editorial-theme/SKILL.md) - give me a magazine-style theme
- [cream-theme](design/cream-theme/SKILL.md) - warm cream theme
- [design-tokens](design/design-tokens/SKILL.md) - extract design tokens from this site
- [dark-mode](design/dark-mode/SKILL.md) - add dark/light toggle
- [chromatic-type](design/chromatic-type/SKILL.md) - chromatic aberration on hero text
- [scramble-rotator](design/scramble-rotator/SKILL.md) - cycling scramble headline
- [mesh-bg](design/mesh-bg/SKILL.md) - animated gradient mesh background
- [split-hero](design/split-hero/SKILL.md) - dual-audience split hero

### apps

- [dashboard-from-api](apps/dashboard-from-api/SKILL.md) - scaffold a dashboard for this REST API
- [crud-from-schema](apps/crud-from-schema/SKILL.md) - CRUD UI from this JSON schema
- [auth-clerk](apps/auth-clerk/SKILL.md) - add Clerk auth to this app
- [db-postgres](apps/db-postgres/SKILL.md) - wire up a postgres connection
- [db-redis](apps/db-redis/SKILL.md) - add redis cache
- [email-resend](apps/email-resend/SKILL.md) - send transactional email via resend
- [payments-stripe](apps/payments-stripe/SKILL.md) - add stripe checkout
- [analytics-posthog](apps/analytics-posthog/SKILL.md) - add posthog event tracking
- [ai-chat](apps/ai-chat/SKILL.md) - add a chat ui talking to claude
- [image-upload](apps/image-upload/SKILL.md) - presigned upload to r2
- [pdf-export](apps/pdf-export/SKILL.md) - add pdf export of this report
- [realtime](apps/realtime/SKILL.md) - add realtime updates via websockets
