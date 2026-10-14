# QA report

## 2026-09-29 interaction update

- Added the opening Signal Lens with a cursor/touch-positioned reveal and a keyboard-operable full-scene resolution.
- The revealed layer uses the real portrait and verified proof points rather than decorative or invented content.
- Confirmed touch users can reposition the lens and trigger the same resolved state.
- Confirmed reduced-motion renders the final composed scene immediately while preserving all text.
- Rebuilt the standalone preview and passed `scripts/verify-content.mjs` plus JavaScript syntax validation.
- A fresh dependency-based production build was not rerun in this environment because registry access returned HTTP 403; the previous production checkpoint remains preserved separately.

## Source and truth audit

- Latest supplied Google APM resume used as the primary factual source.
- GoElite report used for workflow, measurement and reflection detail.
- Existing portfolio used for biography and authentic visual assets.
- USC student ID was intentionally excluded from all production files.
- DPS exists only as a disabled content record.
- People-First's 25% outcome remains explicitly labeled `projected`.
- Emotion AI's unverified 30% customer-satisfaction outcome is omitted.
- No production-user claim was added to prototype work.

## Responsive design coverage

- Desktop manifesto, journey and project sections use native scrolling and sticky stages.
- Tablet and mobile switch to readable, non-trapping layouts.
- Journey becomes a full vertical sequence with a sticky horizontal chapter row.
- Project file becomes a horizontally scrollable WAI-ARIA tablist and normal panel.
- Short desktop-height corrections are included for 1366×768 class laptops.
- A 320px-specific rule set prevents headline and control clipping.

## Accessibility coverage

- Semantic landmarks, one H1, skip link and logical headings.
- Keyboard-operable navigation, menu, journey controls and project tabs.
- Project tabs support Arrow keys, Home and End.
- Mobile menu supports Escape, a focus trap and focus return.
- Visible focus treatment and 44px minimum interactive targets on mobile.
- Reduced-motion removes pinned behavior and nonessential movement without removing content.
- No-JavaScript CSS fallbacks expose journey and project content.

## Performance decisions

- Initial production media is approximately 720KB before framework assets and responsive image optimization.
- Portrait is the only priority image.
- Below-the-fold media uses `next/image` lazy loading.
- No WebGL, video, smooth-scroll wrapper, icon package, component library or looping canvas.
- Scroll work is passive, requestAnimationFrame-batched and limited to three sequences.
- All image dimensions are reserved.

## Automated checks

`npm run qa:content` verifies required assets, PDF validity, one H1, DPS visibility, metric qualifiers and exclusion of the private USC ID.

`npm run preview:build` creates a self-contained HTML preview with embedded imagery and resume, requiring no package installation or network requests.

The included Playwright suite covers anchors, active navigation, project keyboard controls, mobile menu behavior, contact and resume links, reduced motion and 320px overflow.

Dependency installation and the final Next.js build could not be executed inside the authoring workspace because its network policy returned HTTP 403 for the npm registry. Run the documented `npm install`, `npm run typecheck`, `npm run lint`, `npm run build` and `npm run test:e2e` commands in a normal networked environment or Vercel. Lighthouse numbers are intentionally not fabricated; capture them against that production build.
