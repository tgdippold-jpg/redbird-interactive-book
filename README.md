# Redbird Interactive Book v0.9

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses only HTML, CSS, and JavaScript.

## Current version

**v0.9** begins the shift from a simple interactive mockup into a more usable REDBIRD project interface.

The core architecture is:

```text
Notion dashboards -> exported JSON snapshot -> GitHub repo -> Netlify interface
```

v0.8 proved the aesthetic direction: late-1980s adventure-game dithering, Loom / King's Quest / Quest for the Crown references, beveled panels, checkerboard shading, and atmospheric pixel texture.

v0.9 keeps that visual direction but adds a dashboard layer that previews how the live site should eventually be informed by the main REDBIRD Notion pages.

## Contents

- `index.html` - The main HTML document. It now includes a Project Dashboard screen.
- `styles.css` - The base stylesheet.
- `v08-adventure-style.css` - The late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Dashboard styling for KPI cards, pipeline blocks, readiness bars, and tables.
- `script.js` - Navigation between screens.
- `data/redbird-dashboard.sample.json` - A sample data snapshot showing how Notion data can eventually feed the interface.
- `docs/v0.9-dashboard-architecture.md` - Architecture notes for the Notion -> GitHub -> Netlify workflow.

## Source-of-truth rule

Notion remains canonical.

GitHub holds the interface, docs, schema, and snapshots.

Netlify displays the polished portal.

## Running locally

No build step is required.

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Navigate between **Cover**, **Dashboard**, **Contents**, **REDBIRD Today**, **Release Calendar**, and **Back Matter**.

## Deployment

This is designed for static hosting.

Recommended path:

1. Keep this GitHub repository as the source archive.
2. Connect the repository to Netlify.
3. Use Netlify to deploy from the repository root.
4. Embed the live Netlify URL in Notion.

## Next build direction

The next useful step is to make the dashboard consume structured data from `/data/redbird-dashboard.sample.json` instead of hard-coded values.

After that, a lightweight Notion export/snapshot workflow can be added so the dashboard reflects the main REDBIRD Notion pages.
