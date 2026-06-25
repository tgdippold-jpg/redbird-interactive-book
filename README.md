# Redbird Interactive Book v0.7

This repository contains a static version of the REDBIRD interactive prototype based on the original CodePen project. It is intended as a working prototype for the **REDBIRD Album Workspace** and uses only HTML, CSS, and JavaScript—no external build tools are required.

## Current version

**v0.7** preserves the original mockup direction while making two targeted refinements:

1. The release calendar now follows the current REDBIRD Notion release arc: July 2026 through March 2027.
2. The visual language remains pixelated, but uses finer pixel texture, dithered overlays, and more shading so the interface feels more detailed rather than blockier.

## Contents

- `index.html` – The main HTML document defining the structure of the interactive book. It includes the updated release calendar, dashboard, and sections aligned with the current REDBIRD rollout.
- `styles.css` – The stylesheet providing the fine-pixel, sacred-pop archive aesthetic. It defines the colors, layout, responsive behavior, texture, dither, and shading.
- `script.js` – A small script that handles navigation between the screens/pages of the book.
- `README.md` – This file, providing context and instructions.

## Running Locally

No build step is required. To test the prototype locally:

1. Download or clone this repository.
2. Open `index.html` in your preferred web browser.
3. Use the sidebar or Table of Contents to navigate between screens like **Cover**, **Contents**, **REDBIRD Today**, **Release Calendar**, and **Back Matter**.

The prototype uses relative file paths, so opening `index.html` directly from your file system should work without a server.

## Deployment

This is designed for static hosting.

Recommended free-account path:

1. Keep this GitHub repository as the source archive.
2. Connect this repository to Netlify.
3. Use Netlify to deploy from the repository root.
4. Embed the live Netlify URL in Notion.

## Notes

This version retains the original aesthetic of the CodePen prototype, including the pixelated cardinal icon and retro fonts, while updating content to reflect the current REDBIRD release schedule and priorities. The goal of v0.7 is not to abandon the pixel language, but to make it feel more detailed, shaded, and artifact-like.
