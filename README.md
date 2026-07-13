# Eontera Privacy Policy

Static privacy policy site for **Eontera**.

## Purpose

This repository contains a production-ready, GitHub Pages-compatible privacy
policy page for the Eontera Android application. The site is designed to be
readable, lightweight, and suitable for Google Play privacy-policy publication.

## Android Package

`com.berkay.eontera`

## Static GitHub Pages Page

This site is intended to be published as a static GitHub Pages page. It does
not use analytics, cookies, tracking scripts, external fonts, CDN assets, or
client-side storage for tracking behavior.

## Files

- `index.html` - Semantic, accessible privacy policy page with Turkish and English content.
- `styles.css` - Local CSS design system, responsive layout, and print styles.
- `script.js` - Small progressive-enhancement script for language switching, active navigation, and scroll progress.
- `README.md` - Repository documentation and deployment notes.
- `.gitignore` - Common local development ignores.
- `robots.txt` - Public crawler allow rule.

## Local Preview

Example local preview command:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deployment

Push the repository to GitHub and publish it with GitHub Pages.

### First-time setup

```bash
git init
git add .
git commit -m "Add Eontera privacy policy page"
git branch -M main
git remote add origin https://github.com/BerkayOL/Eontera-Privacy-Policy.git
git push -u origin main
```

### If the remote already exists

```bash
git remote set-url origin https://github.com/BerkayOL/Eontera-Privacy-Policy.git
git push -u origin main
```

## GitHub Pages Setup

```text
GitHub repository → Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /root → Save
```

## Expected URL After Publishing

```text
https://berkayol.github.io/Eontera-Privacy-Policy/
```

This URL should be added to the mobile application only after GitHub Pages is
actually published and reachable.

## Maintenance

- Keep the package identifier as `com.berkay.eontera`.
- Replace placeholder effective date, last updated, and contact fields before release.
- Review policy wording whenever app permissions, data sources, or notification behavior changes.
- Preserve the no-tracking and no-third-party-asset constraints.

## Legal Note

This repository provides a static publication surface for the privacy policy. It
does not create any independent analytics, tracking, or cookie behavior.

## Contact

`[Contact information to be inserted]`
