# Redbird Interactive Book v0.12

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses HTML, CSS, JavaScript, and static JSON snapshots.

## Current version

**v0.12** restores the interface toward a vertical, mobile-first book object while preserving the functionality added in v0.10 and v0.11.

The core architecture remains:

```text
Notion dashboards -> exported JSON snapshot -> GitHub repo -> Netlify interface
```

v0.12 responds to two design priorities:

- The interface should be optimized for vertical mobile browsing.
- The site should keep becoming more useful without drifting into a generic dashboard web app.

## New in v0.12

- Mobile-first portrait layout
- Modest desktop expansion instead of wide dashboard sprawl
- More book-like page proportions
- Open Questions / Next Actions drawer
- JSON-driven Tracks screen
- JSON-driven Release Calendar screen
- Expanded data snapshot with `tracks`, `openQuestions`, and `nextActions`
- Visual polish pass to recover more of the original book/artifact feeling

## Contents

- `index.html` - Main interface shell. Includes the core screens and loads the script.
- `styles.css` - Base stylesheet.
- `v08-adventure-style.css` - Late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Dashboard styling for KPI cards, pipeline blocks, readiness bars, and tables.
- `v010-interactions.css` - Interaction styling for clickable cards, page-corner flip, track cards, and toast messages.
- `v011-modules.css` - Styling for Decision Log and Files / Assets module cards.
- `v012-mobile-book-polish.css` - Mobile-first vertical book polish and Open Questions drawer styling.
- `script.js` - Navigation, page-turn behavior, hash routing, toast messages, JSON hydration, dynamic portal modules, and drawer behavior.
- `data/redbird-dashboard.sample.json` - Sample data snapshot showing how Notion data can feed dashboard, readiness, tracks, calendar, decisions, assets, and open questions.
- `docs/v0.9-dashboard-architecture.md` - Architecture notes for the Notion -> GitHub -> Netlify workflow.

## Source-of-truth rule

Notion remains canonical.

GitHub holds the interface, docs, schema, and snapshots.

Netlify displays the polished portal.

## Running locally

No build step is required.

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Navigate between **Cover**, **Dashboard**, **Contents**, **REDBIRD Today**, **Tracks**, **Release Calendar**, **Decision Log**, **Files / Assets**, and **Back Matter**.

## Deployment

This is designed for static hosting on Netlify.

## Next build direction

Next useful work:

1. Continue visual refinement so function and atmosphere stay balanced.
2. Add real Notion page URLs or public/private link targets once dashboard boundaries are decided.
3. Add a more book-like table of contents and visual spread logic.
4. Create a lightweight Notion export/snapshot workflow.
5. Decide whether this portal remains public, private, or split into public/private builds.
