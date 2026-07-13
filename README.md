# Eontera Privacy Policy

Public privacy policy page for the **Eontera** Android app (Package: `com.berkay.eontera`).

This is a static, tracker-free, zero-cookie webpage hosted on GitHub Pages to provide a transparent and fast-loading privacy policy for Eontera users and for Google Play submission requirements.

## Features
- **No Analytics/Tracking:** Absolutely zero cookies, local storage, or tracking scripts.
- **No External Dependencies:** No external fonts (uses system fonts), CDNs, or third-party assets to ensure complete privacy and fast load times.
- **Responsive Design:** Mobile-first, responsive dark layout optimized for readability.
- **Dual Language:** Built-in Turkish and English support via simple CSS/JS toggles.
- **Accessibility:** Accessible contrast ratios and `prefers-reduced-motion` support.

## Project Files
- `index.html` - The static HTML content containing both Turkish and English policies.
- `styles.css` - Pure CSS styling, no frameworks, no external font requests.
- `script.js` - Minimal vanilla JS for toggling languages via `#tr` and `#en` hash links.
- `robots.txt` - Allow web crawlers to index the policy.

## Maintenance and Deployment
This page is hosted via GitHub Pages. Any push to the `main` branch will automatically reflect on the live website once GitHub Pages is configured.

### Initial Setup & Push
```bash
git init
git add .
git commit -m "Add Eontera privacy policy page"
git branch -M main
git remote add origin https://github.com/BerkayOL/Eontera-Privacy-Policy.git
git push -u origin main
```
*(If remote already exists, use `git remote set-url origin https://github.com/BerkayOL/Eontera-Privacy-Policy.git` before pushing).*

### GitHub Pages Setup
1. Go to **Settings** in the GitHub repository.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and folder **/(root)**
4. Click **Save**.

The page will be live at:
`https://berkayol.github.io/Eontera-Privacy-Policy/`

