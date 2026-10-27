# Portfolio V3 — Dynamic Island Navigation Report

Date: 2026-10-27 (Asia/Manila)

## Starting Git state

The checkout already contained substantial uncommitted V3 work, including the About dialogs and footer logo. Nothing was staged. Existing work was preserved; no reset, stash, dependency updates, commit, push, or deployment occurred.

```text
 M package-lock.json
 M package.json
 M src/App.jsx
 M src/components/About.jsx
 M src/components/Card.jsx
 M src/components/ContactForm.jsx
 M src/components/Education.jsx
 M src/components/Footer.jsx
 M src/components/HeroSection.jsx
 M src/components/Navbar.jsx
 M src/components/Projects.jsx
 D src/components/SkillBar.jsx
 M src/components/Skills.jsx
 M src/constants/index.jsx
 M src/index.css
?? PORTFOLIO_V1_CODEBASE_AUDIT.md
?? PORTFOLIO_V1_PROJECT_INVENTORY.md
?? PORTFOLIO_V3_ABOUT_INTERACTION_REPORT.md
?? PORTFOLIO_V3_AMBER_REDESIGN_REPORT.md
?? PORTFOLIO_V3_PHASE_1_REPORT.md
?? PORTFOLIO_V3_PHASE_2_REPORT.md
?? PORTFOLIO_V3_PHASE_3_REFINEMENT_REPORT.md
?? PORTFOLIO_V3_PHASE_3_REPORT.md
?? public/resume/
?? src/assets/BryanOS_preview.png
?? src/assets/LunarLedger_preview.png
?? src/components/AboutInfoDialog.jsx
?? src/components/Portrait.jsx
?? src/components/ProjectArchive.jsx
?? src/components/ProjectCard.jsx
?? src/components/ProjectChapter.jsx
?? src/components/ProjectDetails.jsx
?? src/components/ProjectIndex.jsx
?? src/components/ProjectLinks.jsx
?? src/components/ProjectMedia.jsx
?? src/components/SocialLinks.jsx
?? src/data/
```

## Files changed in this task

- `src/components/Navbar.jsx`: replaces the full-width text navigation and mobile menu with five icon-only native links; active tracking and scroll appearance state; accessible tooltip behavior.
- `src/index.css`: scoped capsule/link/tooltip styles, removal of obsolete header/menu styles, shared anchor clearance.
- `src/constants/index.jsx`: removes the Education destination.
- `src/App.jsx`: removes the standalone Education import and render.
- `PORTFOLIO_V3_DYNAMIC_ISLAND_REPORT.md`: this report.

Before-edit SHA-256 snapshots were compared with every source file afterward. Exactly the four source files above changed. In particular, Footer, Hero, Portrait, About, AboutInfoDialog, Skills, Projects, Contact, education data, and Education component stayed byte-for-byte unchanged. The build regenerated ignored `dist/` output.

## Structure and styling

A fixed capsule floats at the horizontal center, 20px below the top edge plus the top safe-area inset (16px on mobile). It has content-based width, a pill border, 20px backdrop blur with saturation, a translucent dark surface, neutral border, inset highlight, and soft ambient shadow. An opaque dark fallback applies without backdrop-filter support.

The capsule is 66px high on desktop and 62px on mobile. The original EE monogram remains the Home link, imported directly from the same `logo.png`. Its artwork is unchanged. The footer keeps its existing logo treatment.

After scrolling past 80px the surface becomes more opaque with a slightly stronger border/shadow. It returns to the top appearance below 48px, preventing threshold oscillation. Geometry and padding remain constant during this transition, avoiding movement over content.

## Icons and accessibility

Existing `lucide-react` supplies UserRound, CodeXml, Folder, and Mail at 20px with consistent stroke weight. The five destinations are Home (#hero), About (#about), Skills (#skills), Projects (#projects), and Contact (#contact). All targets remain real anchors with an accessible label. Decorative SVGs and the redundant visible tooltip labels are hidden from assistive technologies; the logo uses empty alt text because the link has its own accessible name.

Every target is 44 by 44px. Inactive icons are neutral; the active destination has amber foreground, a muted amber background, and a small glow. Hover adds amber emphasis only to the hovered link. Keyboard focus has a separate two-pixel outline. Tooltips appear below the capsule on hover or keyboard focus, remain hoverable through a small invisible bridge, and can be dismissed with Escape. They reset on the next link focus/pointer entry.

Existing global reduced-motion rules disable transitions and smooth scrolling. No animation or color alone is required to identify links, since each link has an accessible name and a visible focus outline.

## Active-section detection and scrolling

A passive scroll listener schedules at most one requestAnimationFrame callback. Five section positions are compared against a stable reading line at 30 percent of viewport height, constrained below the capsule plus 32px. The last section above that line is active; the document bottom explicitly activates Contact. This uses a lightweight geometry check instead of IntersectionObserver ratios, so long Projects content and gaps do not leave an empty active state. React state changes only when the active ID or glass threshold state changes.

Resize, hashchange, and pageshow also schedule an update. A ResizeObserver watches the five section sizes to accommodate content/image layout changes. Listeners, pending animation frames, and the observer are cleaned up. Native scrolling drives active state during smooth fragment navigation and restored history positions.

Anchors do not intercept clicks or replace history entries. Existing fragments and browser back/forward behavior are retained for the remaining sections. Shared scroll-margin-top is 7rem on smaller viewports and 8rem on desktop, plus the top safe-area inset. This provides clearance beyond the capsule bottom without JavaScript scroll subtraction. Existing reduced-motion-aware native smooth scrolling stays in place.

## Responsive navigation decisions

All five destinations remain visible at every supported width; no hamburger is needed. Mobile reduces only container padding and link gaps, preserving every 44px target. With default zero side safe-area insets, the CSS gives a 262px-wide mobile capsule (220px targets + 16px gaps + 24px padding + 2px border), fitting the requested 320px, 360px, and 390px viewports with edge clearance. Desktop width is 286px. The max-width also reserves side safe-area insets and 24px of outer space. Tooltips are narrow and focus rings/glows are not clipped by capsule overflow.

These are source-level sizing checks, not rendered mobile results. Device-specific safe areas, browser zoom, and visual alignment still require browser verification.

## Education removal and preservation

Rendered flow is now Hero, About, Skills, Projects, Contact, Footer. Education is absent from the page render and shared navigation configuration; active tracking derives its section list from the remaining destinations. No global section numbering or separate Education progress indicator was found. Skills-group and project numbering are independent and unchanged. Existing Skills and Projects padding already supplies section spacing, so no spacing redesign was added.

`Education.jsx`, `src/data/education.js`, retained education styles, Background panel qualifications, résumé overview, and original downloadable PDF remain intact. The standalone Education component is simply unused. Old #education bookmarks no longer target a rendered section, as expected from this removal.

## About dialog regression evidence

About controls, modal lifecycle, education/employment content, portrait glows, and dialog styles are unchanged, confirmed by the source hash comparison. The island stays in the normal document stacking order at z-index 40; native showModal dialogs use the browser top layer above it. This preserves the intended modal layering by construction.

Actual opening/closing, focus return, Escape, PDF viewing, and visible layering were not exercised in a browser during this task. Static preservation and native top-layer semantics are not an interaction test pass.

## Validation results

- `npm run lint`: PASS, zero warnings.
- `npm run build`: PASS, Vite 5.3.4; 1,963 modules transformed.
- `npm audit --omit=dev`: PASS, zero vulnerabilities.
- `git diff --check`: PASS; only line-ending conversion notices.
- Source preservation comparison: PASS; only the four intended source files changed.
- Existing logo remains bundled as `dist/assets/logo-DpbhXg8I.png`.

Lint/build/audit ran with approved normal filesystem/network access because this environment previously prevented Node from resolving the parent directory and blocked registry access in the sandbox. No package files were changed.

## Browser testing limitations

Browser/native surface discovery was attempted. It returned no browsers or apps and the error: “Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2).” No browser tests are claimed as passed.

Remaining runtime checks:

- Desktop centering, logo alignment, glass blur/fallback, hover and active appearance.
- Click each anchor and verify fragment updates, back/forward, reload on a direct fragment, heading clearance, and active tracking in both scroll directions.
- Inspect 390px, 360px, and 320px widths for overflow, focus-ring/tooltip clipping, and touch usability.
- Check keyboard access, tooltip Escape dismissal, reduced-motion settings, and console errors.
- Open Background, Experience, and Resume; confirm they appear above the island, preserve background inertness, close normally, and restore focus.
- Confirm standalone Education is absent while Background education and the original résumé remain available.

## Known issues

The build still reports an outdated caniuse-lite database; dependencies were left unchanged. Browser verification remains pending. No other issue was identified by lint, build, source inspection, or scope checks.
