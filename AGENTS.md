# Architecture — Leforse Luxury Limo

## Project Type

Single-page marketing site built with TanStack Start (React SSR) on Netlify.

## Key Directories

```
src/
  routes/
    __root.tsx   — Shell: sets <html>, loads Google Fonts via HeadContent links
    index.tsx    — Entire page as one React component (LeforseHome)
  styles.css     — All CSS; uses CSS custom properties, no Tailwind
public/          — Static assets (favicon, placeholder image)
netlify.toml     — Build configuration
vite.config.ts   — Vite + TanStack Start + Netlify plugin setup
```

## Design Decisions

- **All CSS is hand-authored** in `src/styles.css`. The marketing template's Tailwind dependency was removed to keep the pixel-perfect design faithful to the original HTML mockup. Do not re-introduce Tailwind.
- **Single route** (`/`): The entire page lives in `src/routes/index.tsx`. No sub-routes are needed for a one-page marketing site.
- **No data layer**: This is a static marketing page. If dynamic content is added later (booking form, CMS), use Netlify Forms or TanStack Start server functions with Netlify Database.
- **Mobile nav toggle** is managed with `useState` in the React component rather than the original inline `onclick` handler.
- **SVG placeholders** stand in for actual vehicle/interior photography; replace `<div className="fleet-img">` / `<div className="hero-image-placeholder">` contents with `<img>` tags when real photos are available.

## Coding Conventions

- JSX uses `className`, `strokeWidth`, `htmlFor`, etc. (React DOM attribute names)
- CSS custom properties (e.g. `var(--primary)`) drive all color and typography — change values in `:root` to retheme.
- Fluid type scale uses `clamp()` — avoid hardcoding pixel font sizes in new sections.
