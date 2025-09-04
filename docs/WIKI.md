# OctoCAT Supply Chain Management — Wiki

This quick wiki provides a concise, single-page reference for developers, contributors, and demo presenters working with the OctoCAT Supply Chain Management application.

## Quick Overview
- Tech stack: TypeScript, Node + Express (API), React + Vite (Frontend), Tailwind CSS
- Repo layout: monorepo with `api/` and `frontend/` workspaces
- Purpose: demo application built to show Copilot Agent Mode and Vision features; contains example REST API, React storefront UI, and demo prompts

## Key Features
- Product catalogue and basic shopping flow
- Demo-ready Cart system (planned via agent prompt)
- OpenAPI/Swagger for the API
- Tailwind-based responsive frontend
- Docker and docker-compose for local containerized runs

## Architecture (high-level)
- Backend: Express.js API with entities and REST routes in `api/src/`.
- Frontend: React + Vite app in `frontend/` with components and contexts under `src/`.
- Integration: Frontend talks to API over REST (default localhost ports: API 3000, Frontend 5137).

See detailed architecture: `docs/architecture.md`.

## Getting Started (Local Development)
Prerequisites:
- Node.js 18+ and npm
- (Optional) Docker for containerized runs

Install dependencies:

```bash
npm install
```

Build the entire repo:

```bash
npm run build
```

Run the app locally (dev hot-reload):

```bash
npm run dev
# or to run individual workspaces
npm run dev --workspace=api
npm run dev --workspace=frontend
```

Run tests:

```bash
npm run test
# run only API tests
npm run test --workspace=api
```

Ports:
- API: 3000 (ensure Codespace port is public if using Codespaces)
- Frontend: 5137

## How to Use the Wiki/Prompt Driven Demos
This repository includes a demo prompt file at `.github/prompts/demo-cart-page.prompt.md` used to drive agent-driven implementations and demos. There is also a GitHub Action (`.github/workflows/demo-cart-agent.yml`) that can create an issue from that prompt and run builds.

If you're running a demo, open the prompt file to review goals and success criteria before implementing features.

## Development Notes & Conventions
- TypeScript across both API and frontend
- Follow existing component/context patterns in `frontend/src/`
- Use `localStorage` for lightweight client persistence (examples to be added)
- Keep styling consistent with Tailwind config in `frontend/`

## Contributing
- Fork the repo and create feature branches for changes
- Run `npm run build` to verify the project compiles after changes
- Add tests for API changes (`api/src/**` tests live next to routes)

## Troubleshooting
- Common problem: CORS between Frontend and API — ensure the API port is accessible and frontend `api/config.ts` points to the right origin.
- Build fails: run `npm ci` then `npm run build --workspace=api` and `npm run build --workspace=frontend` to surface errors.

## Useful Links
- Architecture: `docs/architecture.md`
- Build guide: `docs/build.md`
- Demo prompt: `.github/prompts/demo-cart-page.prompt.md`
- Demo workflow: `.github/workflows/demo-cart-agent.yml`

---

If you want, I can:
- Publish this file to the GitHub Wiki (requires cloning the wiki repo or using the web UI), or
- Create multiple, structured wiki pages (Getting Started, Architecture, Development, Troubleshooting) under `docs/`.

Tell me which option you prefer.
