# Prisma profile

The profile's materials and controls were adapted from the user's `Prisma Pack.html`.
The source file SHA-256 is `9eec46c30c2e254981782798655186de18ee9a1571acb134a0bcda5521f4152f`.

The dark surfaces, warm accent, conic spectrum border, inset tracks, raised
buttons, slider thumbs and typography follow boards 1–3 of the supplied pack.
The content and links describe Adilson Oliveira's existing Konaet projects.
The page uses responsive HTML/CSS and local JavaScript instead of the pack's
fixed 1280 px artboards and embedded component runtime.

The Latin WOFF2 files were extracted unchanged from the supplied pack. Their
SIL Open Font License notices are preserved in `assets/FONT-LICENSE.txt`.
No fonts, analytics, models or scripts are loaded from third-party services.

The README cover is a PNG capture of `.profile-cover` rendered from this page.
Its links open the interactive version hosted by this repository's GitHub Pages.
The existing technical documentation is preserved in `TECHNICAL-PROFILE.md`
at the repository root.

## Verification

`scripts/check_profile.py` renders the page in Chrome at 320, 390, 768, 1024,
1280 and 1920 px. It checks page overflow, project and anchor targets, light
mode, border width, saved preferences, the signature switch, reset and the
browser's reduced-motion preference. It also refreshes the README cover from
the rendered component. The recorded result is in `profile-review.json`.
