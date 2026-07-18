# Forge — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/layout.tsx` — fonts (Space Grotesk / Inter / JetBrains Mono) and page metadata
- `app/page.tsx` — assembles the sections in order
- `components/` — one file per section (Hero, Mission, Programs, Roadmap, Budget, Team, Join, Sponsor, Footer) plus `SectionFrame.tsx`, the shared wrapper that gives every section its corner registration marks and eyebrow label
- `app/globals.css` — design tokens and the corner-mark / blueprint-grid utilities
- `tailwind.config.ts` — color palette (`ink`, `paper`, `blueprint`, `copper`, `circuit`) and font mapping

## Things to swap in before launch

- **Interest form**: currently points to `https://forms.fillout.com/t/n71KpfeyJaus` in `Hero.tsx` and `Join.tsx` — update if you build a new form.
- **HCB / donation link**: `Sponsor.tsx` links to the Hack Club Bank page — confirm the URL still resolves once the org's HCB page is live under its new (non-"Stevenson High School") identity.
- **Team section** (`Team.tsx`): update names/roles/bios as your board changes.
- **Budget percentages** (`Budget.tsx`): the 58 / 30 / 12 split is hardcoded as `SEGMENTS` — update the `pct` values there if the allocation changes; the chart geometry recalculates automatically.
- Favicon is a placeholder SVG built from the anvil mark (`public/favicon.svg`) — swap in a final logo file if you have one.
