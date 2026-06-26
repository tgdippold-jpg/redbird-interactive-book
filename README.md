# Redbird Interactive Book v0.11

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses HTML, CSS, JavaScript, and structured project data.

## Current version

**v0.11** completes the first user-facing language scrub.

The goal of this pass is to make the visible book feel less like a development prototype and more like an interactive album archive.

## New in v0.11

- Removed backend/development language from the visible interface.
- Replaced technical dashboard language with project-facing copy.
- Changed the top header to frame the site as an interactive album archive.
- Rewrote dashboard subtitles and footer text.
- Replaced the technical project-area language with user-facing sections.
- Removed the visible “data source / JSON” framing from the dashboard.
- Removed “bridge” language from the Taylor mashup release and reframed it as a fan-facing single + B-side companion.

## Contents

- `index.html` - Main interface shell. Includes the core screens and user-facing copy.
- `styles.css` - Base stylesheet.
- `v08-adventure-style.css` - Late-1980s adventure-game visual override layer.
- `v09-dashboard.css` - Dashboard styling for KPI cards, project-area blocks, readiness bars, and tables.
- `v010-interactions.css` - Interaction styling for clickable cards, page-corner flip, track cards, and toast messages.
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

1. Continue visual refinement so function and atmosphere stay balanced.
2. Expand the Table of Contents so it better reflects the full REDBIRD project.
3. Add more meaningful detail pages for major releases and project areas.
4. Continue replacing circular navigation with clear project destinations.
5. Decide what should remain visible in the interactive book versus tucked away in project notes.
