## Rehlaa — Visa Services Monorepo

Monorepo for web (Next.js), admin (Next.js), and admin-mobile (Expo) apps with a unified TypeScript design system.

### Getting started

1. Install PNPM and Node 18+.
2. Copy `.env.example` to `.env` in each app as needed.
3. Install deps:

```bash
pnpm install
```

4. Dev servers:

```bash
pnpm dev
```

### Workspaces

- apps/web — Storefront (Next.js App Router)
- apps/admin — Admin panel (Next.js App Router)
- apps/admin-mobile — Admin mobile (Expo + Expo Router)
- packages/ui-web — Rebranded Macaw UI subset for web
- packages/ui-native — React Native base components
- packages/theme — Design tokens and SSR CSS variables
- packages/icons — Shared SVG/TSX icons
- packages/utils — Shared utilities (fetch, zod helpers)
- packages/api — Shared zod schemas + lightweight SDK

### License and Attribution

This project reuses components from Saleor Macaw UI under CC BY 4.0. See `ATTRIBUTION.md`.


