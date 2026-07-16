# REDBIRD listener review — v0.14

This is the review checklist for the shareable-chapters and accessibility pass. The public book remains a review edition; production should not be changed until the listener journey and supplied press materials are approved.

## Completed source checks

- Listener screens are created before the requested URL fragment is applied.
- Direct routes exist for Album, Listening Room, Release Chapters, each release page, Archive Index, Visual Archive, and Press Kit.
- Chapter navigation creates browser-history entries; URL-fragment changes restore the matching page.
- The active navigation item exposes current-page state.
- Newly opened pages move focus to their primary heading.
- Non-button cards with destinations expose link semantics and keyboard activation.
- A skip-to-current-chapter control is the first focusable page action.
- Shareable public pages include Copy Chapter Link.
- The Open Questions drawer exposes expanded and hidden state, closes with Escape, and returns focus.
- Reduced-motion preferences disable page-turn animation and transition effects.
- Print rules hide chapter-sharing controls and preserve the Press Kit layout.
- All local HTML asset references resolve.
- Changed JavaScript parses successfully and changed stylesheet delimiters balance.
- Listener copy contains none of the prohibited internal terminology checked for this project.

## Live review routes

- `#cover`
- `#album`
- `#listen`
- `#releases`
- `#release-slcg`
- `#release-taylor`
- `#release-missa`
- `#release-looping`
- `#release-album`
- `#archive`
- `#media`
- `#epk`

## Next unlocked-computer review

1. Open `#album` directly and confirm the Album page—not the cover—is selected.
2. Move among Album, Releases, Archive, and Press Kit; use browser Back and Forward to confirm page restoration.
3. Tab from the top of the page, use Skip to current chapter, and confirm focus reaches the visible chapter heading.
4. Activate non-button release and archive cards with Enter and Space.
5. Use Copy Chapter Link and open the copied address in a new tab.
6. Check the listener pages at phone, tablet, and desktop widths for clipping or horizontal overflow.
7. Enable reduced motion and confirm page changes occur without animation.
8. Print or save the Press Kit and confirm that navigation and share controls are absent.
9. Run a screen-reader pass through the primary navigation and one complete release chapter.

## Review boundary

Biography, credits, rights language, public contact details, release artwork, press photography, listening links, video links, reviews, and downloadable masters remain intentionally absent until they are supplied or approved.
