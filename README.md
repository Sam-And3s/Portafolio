# Fullstack developer portfolio

Responsive, static React + TypeScript portfolio with Tailwind CSS, bilingual content (Spanish/English), project-detail dialogs, swipeable screenshots, and a GitHub Pages deployment workflow.

## Run locally

```bash
npm install
npm run dev
```

Run `npm run build` to generate the static site in `dist/`.

## Personalize before publishing

- Update the name/mark in `src/components/Navbar.tsx`.
- Replace the sample project copy and links in `src/data/projects.ts`.
- Add real screenshots in `public/projects/`.
- Set the email and social profiles in `src/config.ts`.
- Adjust the experience and education details in `src/i18n.ts`.

## Translation and GitHub Pages

All Spanish and English copy lives in `src/i18n.ts`; project-specific copy is grouped by language in `src/data/projects.ts`. The language selector switches React state immediately and saves the choice in `localStorage`, so it needs no API, server, or route rewrites. Vite's relative `base: './'` keeps assets working when GitHub Pages serves the build from a repository subpath. The included Actions workflow builds `dist/` and deploys it to Pages; select **GitHub Actions** as the Pages build-and-deployment source in repository settings.

The contact form uses `mailto:` because GitHub Pages cannot process form submissions. Submitting it opens the visitor's email application with the message prepared.