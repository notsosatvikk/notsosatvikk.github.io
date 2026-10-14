# Satvik Gupta — Signal to System

A production-oriented, single-page portfolio for Satvik Gupta. The story follows one idea: Satvik finds the useful signal inside noisy information, then turns it into a decision, experience, campaign, dashboard or product.

## Stack

- Next.js 16.3 with App Router
- React 19 and strict TypeScript
- CSS Modules-style global token system without a component library
- Native scrolling, CSS sticky stages and a small requestAnimationFrame scroll controller
- `next/image` for all meaningful site imagery
- Static generation by default; client code is limited to navigation and the three interactive sequences
- Playwright for responsive and interaction tests

No CMS, database, contact-form vendor, smooth-scroll wrapper or second animation library is used.

## Local setup

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a dependency-free, single-file preview that can be opened directly in a browser:

```bash
npm run preview:build
```

This creates `.preview/SatvikGupta_Portfolio_Preview.html` with the portfolio images and resume embedded locally.

For a production-quality check:

```bash
npm run qa:content
npm run typecheck
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before building so canonical, sitemap and structured-data URLs resolve correctly.

## Content editing

Facts are intentionally centralized:

- `content/profile.ts`: contact details, proof points and compact leadership proof
- `content/journey.ts`: work and education chapters
- `content/projects.ts`: project problem, role, decisions, evidence and tools
- `content/gallery.ts`: gallery feature flag and future gallery records
- `content/types.ts`: shared content contracts

The DPS entry is deliberately present with `visible: false`. Do not enable it until the exact school, campus, dates and story are confirmed.

## Asset replacement

All current visual assets were extracted as individual images from Satvik's supplied portfolio PDF, then converted to small WebP files. No full portfolio pages or fabricated product screens are used.

Replace assets in `public/images/` using the same filenames to avoid content changes. Preserve the existing aspect ratio where practical, or update the width and height metadata in the relevant content record.

Preferred future originals:

- `portrait-cutout.webp`: transparent professional cutout, at least 1200px tall
- `goelite-team.webp`: approved GoElite team or campaign image
- `incite-ui.webp`: original exported screens rather than the PDF-extracted composite
- `people-first.webp`: approved case presentation material with no confidential client identity
- `streaming-dashboard.webp`: full-resolution dashboard export
- `emotion-ai.webp`: verified interface or research artifact

The downloadable file must remain at `public/SatvikGupta_Resume.pdf`. Replace it with the final role-appropriate PDF before each application cycle.

## Motion and responsive behavior

Desktop uses native document scrolling with sticky stages for the manifesto, journey and project file. Scroll listeners are passive and updates are batched through requestAnimationFrame. Mobile replaces long pinned sequences with a vertical journey and a normal tab panel. The `prefers-reduced-motion` mode removes scrubbed transforms and pinning while retaining all content.

Breakpoints and short-height corrections are defined in `app/globals.css`. The Playwright suite covers 320px width, iPhone SE, Pixel, iPad, 1366×768 and 1440×900.

## Accessibility

- One H1 and a logical heading hierarchy
- Semantic header, navigation, main, sections and footer
- Skip link and visible focus treatment
- Mobile focus trap with Escape close and focus return
- Journey state communicated with chapter number, weight and progress, not color alone
- WAI-ARIA tabs with arrow, Home and End key support
- Native anchors, no scroll traps and no unexpected focus movement
- Reduced-motion and no-JavaScript fallbacks
- Meaningful image alt text and no decorative-image announcements

Run the automated suite after installing dependencies:

```bash
npm run test:e2e
```

## GitHub Pages deployment

This package is preconfigured for the GitHub user site `https://notsosatvikk.github.io`.

1. Create a **public** repository named exactly `notsosatvikk.github.io`.
2. Upload the **contents of this extracted folder** to the repository root. Do not upload the ZIP itself or place the files inside another folder.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source.
4. Open the **Actions** tab. The included `.github/workflows/deploy.yml` workflow will install dependencies, validate content, build the static export and publish the `out/` directory.
5. After the workflow shows a green check, open `https://notsosatvikk.github.io`.

Every later commit to the `main` branch automatically updates the same public URL. The build uses `NEXT_PUBLIC_SITE_URL=https://notsosatvikk.github.io`, so canonical, sitemap and sharing metadata point to the production address.

GitHub Pages requires a static build, so `next.config.ts` uses `output: "export"`, `trailingSlash: true` and unoptimized local images. The site does not require server functions, a database or writable storage.

## Optional Vercel deployment

1. Push this directory to a Git repository.
2. Import it into Vercel as a Next.js project.
3. Remove the GitHub Pages-only static-export settings if server features are added in the future, and set `NEXT_PUBLIC_SITE_URL` to the final domain.
4. Use the default `npm run build` build command.
5. After the first deployment, run Lighthouse against the production URL and verify email, phone, social and resume links.

No server functions or writable storage are required.

## Facts and permissions still to confirm

1. Exact DPS school, campus, dates and story before enabling that record.
2. Whether a GoElite team or campaign image is approved for public use.
3. Permission to publish any future client, competition or testimonial material beyond the supplied portfolio assets.
4. Whether Emotion AI's claimed 30% customer-satisfaction change was measured. It is currently omitted.
5. Whether `satvikgu@usc.edu` should remain the public primary email and whether the currently public phone should remain visible.
6. Final production domain for canonical metadata.

## File tree

```text
app/
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  contact/ContactFooter.tsx
  home/BeyondBuild.tsx
  home/HomePortrait.tsx
  home/HomeSection.tsx
  home/ProofPoints.tsx
  intro/ManifestoIntro.tsx
  journey/JourneyCard.tsx
  journey/JourneySection.tsx
  journey/JourneyVisual.tsx
  navigation/FloatingNav.tsx
  projects/ProjectFile.tsx
  projects/ProjectPanel.tsx
content/
  gallery.ts
  journey.ts
  profile.ts
  projects.ts
  types.ts
lib/seo.ts
public/
  images/
  icon.svg
  og-image.webp
  SatvikGupta_Resume.pdf
scripts/verify-content.mjs
scripts/build-standalone-preview.mjs
tests/portfolio.spec.ts
preview.template.html
```
