# Arnav Nethula — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Motion, React Three Fiber, Drei, and Cobe.

## Development

- `npm ci` — install the locked dependencies.
- `npm run dev` — start the local development server.
- `npm run build` — generate the production website in `dist/`.
- `npm run preview` — preview the production build.
- `npm run lint` — check the JavaScript and JSX source.

## Content

`src/constants/index.js` contains projects, social links, work experience, and campus activities. `src/sections/` contains the displayed sections; `src/components/` contains their shared UI and animations.

Active website assets live in `public/assets/` and `public/models/`. The tech stack automatically uses images in `public/assets/logos/`. Root-level PDFs and original photos are source materials and are not published by the build.

## 3D asset attribution

The displayed [Toy robot Domowik](https://sketchfab.com/3d-models/toy-robot-domowik-8f1f61ca0c844b978abfb43243513377) model is by [Annelida](https://sketchfab.com/Annelida), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Its attribution is also retained in `src/components/Astronaut.jsx`.

## GitHub Pages

The site is hosted at `https://anethula.github.io/portfolio/`. In repository Settings → Pages, select **GitHub Actions** as the source. The deployment workflow builds the app and publishes only `dist/` on pushes to `main`. Vite and runtime asset URLs use the `/portfolio/` base path.
