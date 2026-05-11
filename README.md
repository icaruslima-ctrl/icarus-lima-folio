# Icarus Lima — Folio

Portfolio of Icarus Lima, Digital Product Designer (UX-UI) based in Sydney, AU.

**Live site:** https://icaruslima-ctrl.github.io/icarus-lima-folio/

---

## Stack

No build step. Runs entirely in the browser.

- **React 18** (UMD build via unpkg)
- **Babel Standalone** — transpiles JSX at runtime
- **Google Fonts** — Inter Tight + JetBrains Mono
- Plain HTML, CSS-in-JS (inline styles), and vanilla JS

---

## Structure

```
/
├── index.html              # Entry point
├── data.js                 # All content — roles, copy, contact details
├── tweaks-panel.jsx        # Live editing panel (accent colour, hero case)
├── v2/
│   ├── swiss-shared.jsx    # Shared components: Masthead, Footer, DynamicGallery, Lightbox
│   ├── swiss-index.jsx     # Index page — hero, manifesto, work list, contact
│   ├── swiss-case.jsx      # Case study pages — hero and condensed layouts
│   └── case-assets.js      # Per-case copy: problem, approach, method, metrics, pull quote
├── img/
│   ├── shippit/
│   ├── hello-molly/
│   ├── Ooovuu/
│   ├── Rockmelon/
│   ├── the iconic/
│   ├── Skyfii/
│   ├── News corp/
│   └── tigerspike/
└── pdf/
    └── icarus_LIMA_CV2026.pdf
```

---

## Case Studies

| # | Company | Years | Role |
|---|---------|-------|------|
| 01 | Shippit | Sep 2024 — Current | Senior UXD |
| 02 | Hello Molly | 2023 | Product Design Contractor |
| 03 | Oovvuu | 2021 — 2023 | Head of UX-UI |
| 04 | Rockmelon | 2018 — 2019 | Head of UX-UI |
| 05 | The Iconic | 2015 — 2019 | Head of UX-UI |
| 06 | Skyfii | 2015 | Lead UX-UI |
| 07 | News Corp | 2014 — 2015 | Senior UX-UI |
| 08 | Tigerspike | 2006 — 2014 | Lead UX-UI |

---

## Images

Each case study reads its images dynamically from its folder in `img/`. Files are sorted numerically — the first image becomes the hero, the rest appear in the gallery below. Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`.

To update images: drop new files into the relevant folder and push.

---

## Deployment

Hosted on GitHub Pages from the `main` branch root.

```bash
git add .
git commit -m "your message"
git push
```

Pages rebuilds automatically on every push (~1 min).
