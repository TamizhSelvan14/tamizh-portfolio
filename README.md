# Tamizh Portfolio — React + Tailwind (Vite)

Mobile-first personal portfolio built with React and Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
# open the shown localhost URL
```

## Build
```bash
npm run build
npm run preview
```

## Free deployment options

### Vercel
1. Import this repo in Vercel.
2. Framework: Vite → default settings.
3. Deploy → get a `*.vercel.app` URL.

### Netlify
1. New Site from Git → pick your repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy → get a `*.netlify.app` URL.

### GitHub Pages (SPA)
1. Add a `base` in `vite.config.js` (e.g., `base: '/tamizh-portfolio/'` if repo is named that).
2. Build and publish the `dist` folder to the `gh-pages` branch (e.g., via `npm i -D gh-pages` and `gh-pages -d dist`).

## Customize
- Replace links in `Hero()` for LinkedIn/GitHub.
- Swap `src/assets/avatar.svg` with your own photo/logo.
- Edit content in the components (skills, experience, projects, etc.).
