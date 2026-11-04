# Yann Vladimir Bajeneza — Portfolio

Personal portfolio website for Yann Vladimir Bajeneza, Senior Software Developer & Technology
Builder based in Kigali, Rwanda. It showcases professional experience, featured case studies
(BIKA, WinSchool modernization, a Kinyarwanda–English AI speech project, and others), the
engineering philosophy behind that work, education, and a way to get in touch.

Live site: https://yannvladimir.dev

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router, Turbopack) — statically exported (`output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animation/transitions
- **lucide-react** for icons
- **canvas-confetti** for a small celebratory effect
- **[Vitest](https://vitest.dev/)** + **React Testing Library** for component tests
- **ESLint** (`eslint-config-next`) for linting
- **GitHub Actions** for CI

The contact form submits directly from the browser to [FormSubmit.co](https://formsubmit.co/)
(no backend, no API keys) and falls back to opening the visitor's email client if that request
fails. The floating action button links out to WhatsApp.

## Project structure

```
app/                   Next.js App Router pages
  page.tsx             Home page — composes all the portfolio sections
  layout.tsx           Root layout, metadata, JSON-LD structured data
  projects/[slug]/     Statically generated case-study detail pages
components/            UI components (Navbar, Hero, ContactModal, section components, etc.)
components/__tests__/  Vitest + Testing Library component tests
data/                  Portfolio content (projects, case studies, personal info) as typed data
public/                Static assets (CV PDF, favicons, images, robots.txt, sitemap.xml)
scripts/               One-off tooling (favicon generation from the avatar image)
```

## Getting started

Requires Node.js 20+ (Node 24 is used in CI).

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## Available scripts

| Script             | Description                                      |
| ------------------ | ------------------------------------------------- |
| `npm run dev`       | Start the Next.js dev server                      |
| `npm run build`     | Type-check and produce a static export in `out/`  |
| `npm start`         | Serve the production build (`next start`)         |
| `npm run lint`      | Run ESLint                                        |
| `npm test`          | Run the Vitest test suite once                    |
| `npm run test:watch`| Run Vitest in watch mode                          |

## Testing

Component tests live under `components/__tests__/` and use Vitest + React Testing Library with
a jsdom environment. They cover real behavior rather than just rendering smoke tests, for example:

- `ContactModal.test.tsx` — form validation, successful submission via FormSubmit, the
  mailto fallback (and error logging) when the request fails, and a regression test for a bug
  where closing the modal after a successful submission and reopening it would show a stale
  "message sent" screen instead of a fresh form.
- `Navbar.test.tsx` — desktop/mobile navigation links point at the right sections, the mobile
  drawer opens and closes, and the contact modal trigger fires correctly.
- `ThemeProvider.test.tsx` — theme defaults to light, a previously saved theme is honored on the
  very first render (no flash of the wrong theme), and toggling persists to `localStorage`.

Run them with:

```bash
npm test
```

## Building & deploying

`npm run build` produces a fully static site in `out/` (`next.config.ts` sets
`output: "export"` and `images.unoptimized: true`), so it can be deployed to any static host —
shared hosting (e.g. cPanel), Netlify, GitHub Pages, Vercel, etc. Upload/sync the contents of
`out/` to your host of choice.

## CI

`.github/workflows/ci.yml` runs on every push/PR to `main`: installs dependencies, lints, runs
the test suite, and builds the static export, so a broken build or failing test is caught before
merge.

## License

The source code in this repository is licensed under the [MIT License](./LICENSE). This does
**not** extend to the personal content it presents — resume/CV details, case-study descriptions,
photos, and biographical information about Yann Vladimir Bajeneza remain his and are not
licensed for reuse.
