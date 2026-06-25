# Redbird Interactive Book v0.11

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses HTML, CSS, JavaScript, and static JSON snapshots.

## Current version

**v0.11** continues the shift from visual mockup into usable REDBIRD project portal.

The core architecture remains:

```text
Notion dashboards -> exported JSON snapshot -> GitHub repo -> Netlify interface
```

v0.10 added the first interaction pass: page-corner turn control, soft page-turn animation, hash navigation, clickable cards, a Tracks screen, and dashboard JSON hydration.

v0.11 adds the first operational modules beyond the basic dashboard:

- Decision Log screen
- Files / Assets screen
- Expanded dashboard JSON snapshot
- Dynamic module creation from JavaScript
- Runtime stylesheet loading for module-specific styles
- Decision and asset cards hydrated from `data/redbird-dashboard.sample.json`

## Contents

- `index.html` - Main interface shell. Includes the core screens and loads the script.
- `styles.css` - Base stylesheet.
- `v08-adventure-style.css` - Late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Dashboard styling for KPI cards, pipeline blocks, readiness bars, and tables.
- `v010-interactions.css` - Interaction styling for clickable cards, page-corner flip, track cards, and toast messages.
- `v011-modules.css` - Styling for Decision Log and Files / Assets module cards.
- `script.js` - Navigation, page-turn behavior, hash routing, toast messages, dashboard JSON hydration, and dynamic portal modules.
- `data/redbird-dashboard.sample.json` - Sample data snapshot showing how Notion data can feed dashboard, readiness, decisions, and assets.
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

1. Add real Notion page URLs or public/private link targets once dashboard boundaries are decided.
2. Add more JSON-driven modules for Tracks and Release Calendar.
3. Add a small in-interface status drawer for open questions and next actions.
4. Create a lightweight Notion export/snapshot workflow.
5. Decide whether this portal remains public, private, or split into public/private builds.
