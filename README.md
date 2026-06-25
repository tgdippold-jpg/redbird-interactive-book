# Redbird Interactive Book v0.10

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses HTML, CSS, JavaScript, and static JSON snapshots.

## Current version

**v0.10** continues the shift from visual mockup into usable project portal.

The core architecture remains:

```text
Notion dashboards -> exported JSON snapshot -> GitHub repo -> Netlify interface
```

v0.10 adds the first interaction pass:

- Page-corner turn control
- Soft page-turn animation
- Hash navigation for direct screen links
- Clickable dashboard cards
- Clickable release calendar rows
- A dedicated Tracks screen
- Dashboard hydration from `data/redbird-dashboard.sample.json`

## Contents

- `index.html` - Main interface. Includes Cover, Dashboard, Contents, Today, Tracks, Calendar, and Back Matter screens.
- `styles.css` - Base stylesheet.
- `v08-adventure-style.css` - Late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Dashboard styling for KPI cards, pipeline blocks, readiness bars, and tables.
- `v010-interactions.css` - Interaction styling for clickable cards, page-corner flip, track cards, and toast messages.
- `script.js` - Navigation, page-turn behavior, hash routing, toast messages, and dashboard JSON hydration.
- `data/redbird-dashboard.sample.json` - Sample data snapshot showing how Notion data can eventually feed the interface.
- `docs/v0.9-dashboard-architecture.md` - Architecture notes for the Notion -> GitHub -> Netlify workflow.

## Source-of-truth rule

Notion remains canonical.

GitHub holds the interface, docs, schema, and snapshots.

Netlify displays the polished portal.

## Running locally

No build step is required.

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Navigate between **Cover**, **Dashboard**, **Contents**, **REDBIRD Today**, **Tracks**, **Release Calendar**, and **Back Matter**.

## Deployment

This is designed for static hosting on Netlify.

## Next build direction

Next useful work:

1. Replace more hard-coded cards with JSON-driven modules.
2. Add actual Notion page URLs or public/private link targets once the dashboard boundaries are decided.
3. Add a Decision Log screen.
4. Add a Files / Assets screen.
5. Build a lightweight Notion export/snapshot workflow.
