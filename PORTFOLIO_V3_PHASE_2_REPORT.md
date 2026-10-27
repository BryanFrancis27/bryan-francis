# Portfolio V3 — Phase 2 Implementation Report

## 1. Starting Git state and branch

- Repository: Portfolio V1 React/Vite application at `bryan-francis`
- Working branch: `feat/portfolio-v3-foundation`
- Current and starting commit: `40d881d437100e7462377354d90848db3d0e1539` (`Updated Images`)
- Phase 1 remained uncommitted in the working tree and was preserved in full.
- Pre-existing untracked audit files remained untouched: `PORTFOLIO_V1_CODEBASE_AUDIT.md` and `PORTFOLIO_V1_PROJECT_INVENTORY.md`.
- No branch, remote, commit, push, or deployment action was performed during Phase 2.

## 2. Files created and modified

Created for Phase 2:

- `src/components/ProjectIndex.jsx`
- `src/components/ProjectChapter.jsx`
- `src/components/ProjectArchive.jsx`
- `src/components/ProjectLinks.jsx`
- `PORTFOLIO_V3_PHASE_2_REPORT.md`

Modified for Phase 2:

- `src/components/Projects.jsx` — replaced the V1-style grid composition with the section introduction, index, chapters, archive, and active-section observer.
- `src/components/Card.jsx` — adapted the prior card into the compact archive-row renderer instead of leaving a competing project presentation.
- `src/App.jsx` — changed the shell from `overflow-x-hidden` to `overflow-x-clip` so horizontal spill remains clipped without creating the scroll container that can interfere with sticky descendants.
- `src/index.css` — added Projects-scoped Gallery Monochrome and accessible olive token variables.

`src/data/projects.js` was read as the sole project-data source but did not require Phase 2 content changes. All Phase 1 project fields and unknown `null` or empty values remain intact.

The accumulated working tree also still contains the intentional Phase 1 changes to `package.json`, `package-lock.json`, `ContactForm.jsx`, `constants/index.jsx`, and the project data/report files.

## 3. Final component architecture

- `Projects.jsx` owns filtering, composition, navigation metadata, active state, and observer lifecycle.
- `ProjectIndex.jsx` renders native fragment links as either a compact mobile/tablet jump list or desktop sticky rail.
- `ProjectChapter.jsx` renders one semantic featured-project article and its alternating information/media layout.
- `ProjectArchive.jsx` owns the More Work section and maps archive projects to compact rows.
- `Card.jsx` is retained and repurposed as the archive row, so there is no unused legacy grid card.
- `ProjectLinks.jsx` centralizes conditional live, source, and case-study link behavior.
- `projects.js` remains UI-independent and supplies all displayed content, featured assignments, media, and optional destinations.

## 4. Desktop layout

The Projects section now uses the scoped Deep Charcoal background and a maximum-width content container consistent with V1. The introduction provides the `03 / SELECTED WORK` eyebrow, `Selected work.` heading, and a short structural overview.

At `lg` and above, the work area becomes a narrow 184px index rail plus a flexible content stream. AutoCare+ places information before media; LunarLedger reverses those columns. Both chapters use a two-fifths information and three-fifths media grid, deliberate whitespace, chapter dividers, structured technology labels, and up to three verified contribution statements.

More Work follows as a compact archive containing DoBu Martial Arts, Meals on Wheels, and BryanOS. DoBu and Meals on Wheels retain their verified V1 screenshots. BryanOS uses a non-clickable text-first preview.

## 5. Mobile and tablet layout

Below `lg`, the sticky rail is removed from layout and replaced with a compact native jump list above the chapters. Featured chapters remain in logical DOM reading order: project information first, then media. The desktop-only order utilities produce the alternating composition without changing mobile reading order.

Archive rows collapse to a single-column presentation on narrow screens, with project number, title, description, technologies, optional actions, and media remaining visible without hover. The section does not create a nested scroll container or horizontal carousel.

## 6. Sticky-index implementation

The desktop `ProjectIndex` uses `position: sticky`, `top-32`, and `self-start` inside the Projects layout. Because it remains a normal grid child, its sticky range is bounded by the Projects content and it should release when the section ends rather than remaining fixed across the page.

The main app shell now uses Tailwind's `overflow-x-clip` utility instead of `overflow-x-hidden`. Unlike hidden overflow, clip does not intentionally create a scrolling container, preserving the expected document-scrolling context for the sticky rail while continuing to suppress horizontal visual spill.

Index targets are derived from each featured project's `slug`:

- `#project-autocare-plus`
- `#project-lunar-ledger`
- `#project-archive`

Each target has responsive `scroll-margin-top` utilities to avoid the fixed V1 navbar. The links are ordinary anchors; their fragments remain copyable and browser history remains available. No click interception, forced scroll, or scroll snapping was added.

## 7. Scroll-aware active state

`Projects.jsx` initializes the active item from a valid URL fragment when present and otherwise selects AutoCare+. It also listens for `hashchange`, so direct anchor navigation and browser history update the highlighted entry.

A native `IntersectionObserver` watches the two featured articles and archive. A narrow observer root band (`-20%` top and `-65%` bottom margins) triggers recalculation around the upper-middle reading area. When recalculating, the implementation deterministically prefers the section containing the 28% viewport activation line, then the closest section top, then document order. State is only updated when the selected ID changes.

The observer is disconnected and the hash listener is removed during cleanup. If `IntersectionObserver` is unavailable, native anchors and hash-based active initialization continue to work. Tracking never changes scroll position.

Only the active link receives `aria-current="location"` within each responsive navigation instance.

## 8. Missing media and links

AutoCare+ and LunarLedger receive deliberate text-first editorial panels containing only their project names, project numbers, and verified technology labels. Abstract borders and geometric outlines are decorative; no dashboards, charts, balances, metrics, controls, or screenshots were fabricated.

BryanOS similarly uses a smaller text-first archive treatment. The component path supports a future real screenshot through the existing `image` data field without a renderer rewrite.

All project destinations remain `null`. `ProjectLinks` returns no markup when a project has no verified destination, so no dead CTA, arrow, empty anchor, or misleading clickable row appears. When supplied later, each external destination will receive a descriptive label, project-specific accessible name, new-tab notice, and safe `rel` attributes.

## 9. Accessibility and reduced-motion decisions

- The outer Projects container is a labeled semantic `<section>`.
- Featured projects are labeled semantic `<article>` elements.
- More Work is a labeled nested `<section>` and archive records are `<article>` elements.
- Heading levels progress from section `h2` to chapter/archive `h3` and archive-item `h4`.
- Desktop and compact navigations have distinct accessible labels.
- Index and optional external links have visible high-contrast `focus-visible` rings and minimum 44px target heights where appropriate.
- Active state is communicated by color, border, and `aria-current`, not color alone.
- Real screenshots have project-specific alt text; decorative geometric shapes are hidden from assistive technologies.
- No essential archive information depends on hover.
- Gallery Monochrome variables are scoped to `.projects-editorial`. Muted text and focus colors were lightened relative to the decorative palette values to preserve stronger contrast on Deep Charcoal.
- Framer Motion is limited to gentle opacity and 20–24px vertical entrances. `useReducedMotion` disables the initial offset and reduces transition duration to zero.
- Native fragment navigation was retained without adding smooth scrolling, so reduced-motion users do not receive scripted or CSS-forced animated scrolling.

## 10. Technical compromises and outstanding issues

- The observer and sticky behavior are source-implemented but could not be exercised in a real browser in this environment.
- AutoCare+, LunarLedger, and BryanOS still require approved media.
- All project live, source, and case-study URLs remain unavailable.
- `summary` remains `null` in project data. Renderers fall back to the verified `description` rather than inventing new copy.
- `features` remains empty for featured projects, so chapters use the supplied verified contribution statements.
- The existing fixed Navbar still intercepts its own primary section links and uses a hardcoded scroll offset. Phase 2 did not broaden scope into a Navbar refactor; project-index anchors themselves retain native behavior.
- The large DoBu and Meals on Wheels source images remain unoptimized.
- The existing Browserslist `caniuse-lite` update notice remains.

## 11. Verification results

### Before Phase 2 changes

| Check | Result |
| --- | --- |
| `npm run lint` | Passed with 0 errors and 0 warnings. |
| `npm run build` | Passed; Vite transformed 1,962 modules. The existing Browserslist notice appeared. |
| `npm audit --omit=dev` | Passed with 0 production vulnerabilities. |
| Browser pre-check | Unavailable; computer-use exposed no app or browser surfaces. |

### After Phase 2 changes

| Check | Result |
| --- | --- |
| `npm run lint` | Passed with 0 errors and 0 warnings. |
| `npm run build` | Passed; Vite transformed 1,966 modules and resolved the two retained project images. |
| `npm audit --omit=dev` | Passed with 0 production vulnerabilities. |
| `git diff --check` | Passed with no whitespace errors. Git displayed only the repository's existing LF-to-CRLF working-copy notices. |
| Source guard search | Confirmed observer, sticky, scroll-margin, and `aria-current` implementation; no excluded project names or legacy project-link fields exist in active source. |

## 12. Browser testing results and limitations

Browser testing was attempted before implementation, but the available computer-use inventory returned no browsers and no app windows. The same environment limitation from Phase 1 therefore remains.

The following behaviors were not directly exercised and must not be treated as visually verified:

- 1440px chapter proportions and alternating balance.
- Sticky positioning and release at the Projects boundary.
- Active-link transitions during upward and downward scrolling.
- Fragment navigation, refresh-at-fragment behavior, and browser-history traversal.
- 768px and 390px responsive layouts.
- Real keyboard traversal and focus appearance.
- Reduced-motion rendering.
- Runtime console output, image loading, horizontal overflow, and layout shift.
- Regression behavior in Navbar, Hero, About, Skills, Education, Contact, and Footer.

The production build verifies compilation, dependency resolution, Tailwind class generation, and image imports, but it is not a substitute for browser UAT.

## 13. Risks and known regressions

No source-level regression or new lint/build/audit failure was found. The primary remaining risk is the lack of rendered browser verification for sticky layout, observer thresholds, viewport changes, and the interaction between the fixed global Navbar and fragment positions.

Only `App.jsx` outside the Projects implementation changed, and that change is limited to the horizontal overflow mode required for sticky compatibility. Other homepage components and section order were not modified during Phase 2.

## 14. Recommended Phase 3 scope

1. Perform browser UAT at approximately 1440px, 768px, and 390px, including upward/downward scroll tracking and direct fragment refreshes.
2. Test keyboard navigation, reduced motion, 200% zoom, and screen-reader landmark/heading output.
3. Tune observer root margins and sticky top offset only from observed behavior, not assumptions.
4. Collect and approve project-specific screenshots and destinations, then populate the existing data fields.
5. Optimize retained project screenshots into appropriately sized modern formats.
6. Address the global Navbar's native-fragment, fixed-offset, focus, and mobile disclosure issues as a separate scoped accessibility phase.
7. Continue the Gallery Monochrome system into the next approved section without globally redesigning untouched sections.
