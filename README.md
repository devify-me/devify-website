# Devify Website

The documentation and landing page for [Devify](https://devify.me) — a modular Go framework for building applications with the organizational clarity of microservices and the deployment simplicity of a single binary.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Project Structure

```
.
├── public/                         # Static assets (favicons, etc.)
├── src/
│   ├── assets/branding/            # Devify logos and branding
│   ├── components/landing/         # Landing page components
│   ├── content/docs/               # Documentation (MDX)
│   │   ├── getting-started/        # Installation, quick start, project structure
│   │   ├── architecture/           # Kernel, modules, adapters, eventbus
│   │   ├── module-development/     # Routes, services, repositories, events
│   │   ├── built-in-modules/       # Auth, RBAC
│   │   ├── configuration/          # TOML, env vars, module config
│   │   ├── database-guide/         # PostgreSQL, MySQL, SQLite, MongoDB
│   │   ├── deployment/             # Production builds, Docker
│   │   └── cli-reference/          # CLI commands
│   ├── layouts/                    # Custom landing page layout
│   ├── pages/                      # Landing page (index.astro)
│   ├── scripts/                    # Scroll animations
│   └── styles/                     # Fonts, landing page, Starlight overrides
├── astro.config.mjs                # Astro + Starlight configuration
├── package.json
└── tsconfig.json
```

## Commands

All commands are run from the root of the project:

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm install`        | Install dependencies                        |
| `npm run dev`        | Start local dev server at `localhost:4321`  |
| `npm run build`      | Build production site to `./dist/`          |
| `npm run preview`    | Preview the build locally before deploying  |

## Tech Stack

- **Astro** — Static site generation
- **Starlight** — Documentation framework
- **TypeScript** — Type-safe configuration
- **Custom CSS** — Landing page styling with scroll animations
