# Redbird Interactive Book v0.11

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses HTML, CSS, JavaScript, and structured project data.

## Current version

**v0.11 checkpoints 9–11** complete the stabilization, Today rebuild, and aesthetic/sound-reference pass.

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

### Checkpoint 3 — Table of Contents expansion

- Expanded the Contents page into a fuller REDBIRD project map.
- Added section labels: Start Here, Release Work, Creative Buildout, and Archive + Operations.
- Added entries for Current Release Package, Songs / Releases, Audio + Listening, Visual + Zine Assets, Style References, Files / Assets, Roadmap + Tasks, Decisions, Back Matter / Archive, and Grant / Salt Lick Materials.
- Added `v011-toc-expansion.css` for a denser but organized contents layout.

### Checkpoint 4 — navigation logic cleanup

- Added meaningful landing screens for Current Release Package, Audio + Listening, Visual + Zine Assets, Roadmap + Tasks, Style References, and Grant / Salt Lick Materials.
- Updated the page order so the corner page-turn control moves through the new project areas.
- Added route cleanup logic so expanded TOC items and key buttons land on better destinations.
- Reduced circular navigation by separating Current Release, Audio, Visual, Roadmap, Files, Decisions, Style References, Grant, Calendar, and Back Matter.

### Checkpoint 6 — page flip and layout polish

- Added `v011-page-polish.css`.
- Loaded checkpoint 6 polish through the existing TOC expansion stylesheet.
- Hid the page-corner turn control on the cover.
- Moved the page-corner turn control into the lower page edge.
- Added a subtler folded-corner treatment.
- Improved page heading alignment, page width, and breathing room for main sections.

### Checkpoint 7 — terminology verification

- Searched the repository for remaining bridge terminology.
- Confirmed no `bridge` or `social bridge` references remain.
- Taylor mashup language remains framed as a fan-facing single + B-side companion.

### Checkpoint 8 — log and deploy verification

- Updated README to reflect checkpoints 6–8.
- Netlify project state was checked after the latest GitHub commits.
- Notion Mockup Lab was updated with checkpoint status.

### Checkpoint 9 — review + stabilization pass

- Added a Review + Stabilization screen.
- Captured nav, TOC, dashboard, Today, mobile feel, and visual-balance watch items.
- Added the screen to navigation and the page-turn sequence.

### Checkpoint 10 — REDBIRD Today rebuild

- Rebuilt REDBIRD Today as a daily cockpit.
- Added current focus, latest listening notes, open decisions, next useful action, and release readiness.
- Routed Today actions to Current Release, Audio, Visual, Files, Roadmap, and Dashboard.

### Checkpoint 11 — aesthetic / sound / game-reference pass

- Added an Aesthetic + Sound Lab screen.
- Captured Loom / King's Quest, Castlevania, Game Boy/pixel type, map logic, and UI cue direction.
- Added optional non-autoplay sound cue prototypes for page turn, item found, archive key, and unavailable/error states.

## Contents

- `index.html` - Main interface shell. Includes the core screens and user-facing copy.
- `styles.css` - Base stylesheet.
- `v08-adventure-style.css` - Late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Base dashboard styling for KPI cards, project-area blocks, readiness bars, and tables.
- `v010-interactions.css` - Interaction styling for clickable cards, page-corner flip, track cards, and toast messages.
- `v011-dashboard-cleanup.css` - Checkpoint 2 dashboard cleanup styling.
- `v011-toc-expansion.css` - Checkpoint 3 expanded Table of Contents styling; imports later polish layers.
- `v011-page-polish.css` - Checkpoint 6 page flip and layout polish styling.
- `v011-checkpoints-9-11.css` - Styling for stabilization, Today cockpit, and aesthetic/sound lab screens.
- `v011-modules.css` - Styling for Decision Log and Files / Assets module cards.
- `v012-mobile-book-polish.css` - Mobile-first vertical book polish and Open Questions drawer styling.
- `script.js` - Navigation, page-turn behavior, hash routing, toast messages, project data hydration, dynamic portal modules, route cleanup, and drawer behavior.
- `v011-checkpoints-9-11.js` - Checkpoints 9–11 behavior: stabilization screen, Today rebuild, aesthetic/sound lab, and optional sound cue prototypes.
- `data/redbird-dashboard.sample.json` - Sample structured project data for dashboard, readiness, tracks, calendar, decisions, assets, and open questions.
- `docs/v0.9-dashboard-architecture.md` - Development architecture notes.

## Running locally

No build step is required.

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Navigate between **Cover**, **Dashboard**, **Contents**, **REDBIRD Today**, **Current Release Package**, **Tracks**, **Audio + Listening**, **Visual + Zine Assets**, **Release Calendar**, **Roadmap + Tasks**, **Decision Log**, **Files / Assets**, **Style References**, **Grant / Salt Lick Materials**, **Review + Stabilization**, **Aesthetic + Sound Lab**, and **Back Matter**.

## Next build direction

Next useful work:

1. Complete the skipped checkpoint 5: release-specific placeholder pages for Self Love / Clark Gable, Taylor Mashup Set, Missa Brevis, Looping Pedal EP, and REDBIRD Album.
2. Review the live page on mobile and note spacing, sound-cue, and route issues.
3. Decide what should remain visible in the interactive book versus tucked away in project notes.
