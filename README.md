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
| 01 | Shippit | Sep 2024 — Apr 2026 | Senior UXD |
| 02 | 4Mation | Mar 2024 — Sep 2024 | Senior UX/UI Designer |
| 03 | Hello Molly | Jun 2023 — Dec 2023 | Senior UX/UI Designer (Contractor) |
| 04 | Oovvuu | Jul 2021 — Jun 2023 | Senior Lead UX/UI Designer |
| 05 | SiteMinder | Feb 2021 — Jul 2021 | Senior Lead UX/UI Designer |
| 06 | Panthera Property Group | Sep 2020 — Feb 2021 | Senior Lead UX/UI Designer |
| 07 | Rockmelon | May 2018 — Jul 2020 | Head of UX/UI Designer |
| 08 | The Iconic | Mar 2016 — Jun 2018 | Head of UXD |
| 09 | Skyfii | Jul 2015 — May 2016 | Lead UX-UI |
| 10 | News Corp | Nov 2014 — Jul 2015 | Senior UX-UI |
| 11 | Tigerspike | Mar 2008 — Nov 2014 | Lead UX-UI |

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
