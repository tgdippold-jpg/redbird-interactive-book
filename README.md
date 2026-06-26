# Redbird Interactive Book v0.11

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses HTML, CSS, JavaScript, and structured project data.

## Current version

**v0.11 checkpoint 2** completes the dashboard cleanup pass.

The goal of this checkpoint is to make the Dashboard feel more useful at a glance: less text-heavy, less technical, and more focused on the active REDBIRD rollout.

## Completed checkpoints

### Checkpoint 1 — user-facing language scrub

- Removed backend/development language from the visible interface.
- Replaced technical dashboard language with project-facing copy.
- Changed the top header to frame the site as an interactive album archive.
- Rewrote dashboard subtitles and footer text.
- Removed the visible data-source framing from the dashboard.
- Removed bridge language from the Taylor mashup release and reframed it as a fan-facing single + B-side companion.

### Checkpoint 2 — dashboard cleanup

- Rebuilt the Dashboard around the current release.
- Kept readiness bars prominent.
- Added a clearer Current Release / Release Path focus row.
- Replaced broad project-area text with compact project cards.
- Added a concise Needs Attention panel.
- Added a Recent Update card.
- Added `v011-dashboard-cleanup.css` for spacing, compact KPI cards, project-area cards, and cleaner dashboard rhythm.

## Contents

- `index.html` - Main interface shell. Includes the core screens and user-facing copy.
- `styles.css` - Base stylesheet.
- `v08-adventure-style.css` - Late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Base dashboard styling for KPI cards, project-area blocks, readiness bars, and tables.
- `v010-interactions.css` - Interaction styling for clickable cards, page-corner flip, track cards, and toast messages.
- `v011-dashboard-cleanup.css` - Checkpoint 2 dashboard cleanup styling.
- `v011-modules.css` - Styling for Decision Log and Files / Assets module cards.
- `v012-mobile-book-polish.css` - Mobile-first vertical book polish and Open Questions drawer styling.
- `script.js` - Navigation, page-turn behavior, hash routing, toast messages, project data hydration, dynamic portal modules, and drawer behavior.
- `data/redbird-dashboard.sample.json` - Sample structured project data for dashboard, readiness, tracks, calendar, decisions, assets, and open questions.
- `docs/v0.9-dashboard-architecture.md` - Development architecture notes.

## Running locally

No build step is required.

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Navigate between **Cover**, **Dashboard**, **Contents**, **REDBIRD Today**, **Tracks**, **Release Calendar**, **Decision Log**, **Files / Assets**, and **Back Matter**.

## Next build direction

Next useful work:

1. Expand the Table of Contents so it better reflects the full REDBIRD project.
2. Add more meaningful detail pages for major releases and project areas.
3. Continue replacing circular navigation with clear project destinations.
4. Refine spacing and page-turn behavior after the dashboard is reviewed live.
5. Decide what should remain visible in the interactive book versus tucked away in project notes.
