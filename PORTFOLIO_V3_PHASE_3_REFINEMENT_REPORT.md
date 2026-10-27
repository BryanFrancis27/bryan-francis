# Portfolio V3 — Phase 3 UI Refinement Report

## 1. Starting Git state and branch

- Repository: Portfolio V1 React/Vite application at `bryan-francis`
- Branch: `feat/portfolio-v3-foundation`
- Starting and current commit: `40d881d437100e7462377354d90848db3d0e1539` (`Updated Images`)
- The accumulated Phase 1, Phase 2, and Phase 3 work remained uncommitted and was preserved.
- Existing audit and implementation reports remained untracked and untouched except for creating this refinement report.
- No branch, remote, commit, push, or deployment action was performed.

## 2. Files changed

Modified for this refinement:

- `src/components/Skills.jsx`
- `src/components/Education.jsx`
- `src/components/Navbar.jsx`
- `src/data/skills.js`
- `src/data/education.js`
- `src/index.css`

Created:

- `PORTFOLIO_V3_PHASE_3_REFINEMENT_REPORT.md`

Projects, Project Index, Project Chapters, Project Archive, Hero, About, Contact, Footer, project data, résumé links, dependencies, and homepage order were not changed during this refinement.

## 3. Final Skills presentation

Skills now follows the approved Minimal Editorial Lists direction:

- Eyebrow: `CAPABILITIES`
- Heading: `Tools of the trade.`
- Three simple capability columns with a thin top divider, olive number, concise heading, and vertical text list.

Visible content:

### 01 / Frontend

- React
- Next.js
- TypeScript
- JavaScript
- HTML / CSS
- Tailwind CSS

### 02 / Backend

- Java / Spring Boot
- PHP / Laravel
- Node.js
- PostgreSQL / MySQL
- Supabase

### 03 / Design

- Figma
- Wireframing
- Prototyping
- Responsive UI

Descriptions, capability bullets, bordered technology chips, and the visible Working Approach footer were removed. Technology names remain plain informational list items with no hover or click treatment.

The section retains its charcoal background, Gallery Monochrome typography, olive accents, existing `id="skills"`, and section/heading semantics. Vertical rhythm was shortened to make Skills materially less dense than the original Phase 3 design.

## 4. Skills content retained but hidden from UI

The complete Skills source was preserved in `src/data/skills.js`:

- Full category titles remain available through `title`.
- Full descriptions remain in `description`.
- The complete technology inventories remain in `technologies`, including Bootstrap and Firebase / Firestore.
- Capability statements remain in `capabilities`.
- All five professional-skill records remain in `PROFESSIONAL_SKILLS` for possible later About integration.

New `displayTitle` and `displayTechnologies` fields provide the curated presentation without deleting or mutating the underlying evidence. Combined display labels such as `HTML / CSS` and `Java / Spring Boot` are visual groupings of existing records, not new expertise claims.

## 5. Education grouping and design

Education now presents a connected two-stage academic journey on Gallery White.

### Stage 01 — Current Studies

Period: `2023–Present`

- University of Cebu — Bachelor of Science in Information Technology — Software Engineering; Banilad, Philippines.
- Lithan EduCLaaS — Applied Degree in Software Engineering; Singapore.

The two current records appear as distinct sage-tinted surfaces within the same stage. Grouping them by period communicates overlap without merging the institutions or implying completed degrees.

### Stage 02 — Earlier Foundation

Period: `2021–2023`

- University of Cebu — Senior High School — STEM; Lapu-Lapu & Mandaue, Philippines.

The earlier record uses a simpler divided treatment. A thin vertical line and small olive markers connect the stages without recreating the oversized alternating V1 timeline. No logos, fixed heights, left/right alternation, or timeline-drawing animation were added.

The section heading is now `Built on a foundation of learning.` and retains `id="education"`.

## 6. Education data accuracy decisions

The original education records remain intact in `program`. New `displayProgram` fields provide the approved public wording while preserving source labels such as `(SE)`, `(BDSE)`, and `(K-12)` underneath.

`EDUCATION_STAGES` references records by stable ID instead of duplicating institution data. The current stage contains both 2023 records; the earlier stage contains the 2021–2023 record.

The implementation does not:

- Merge University of Cebu and Lithan EduCLaaS into one qualification.
- Describe either current record as completed.
- Add an expected graduation year of 2027.
- Resolve whether the two programs form a combined pathway.

Those questions still require authoritative documentation.

## 7. Navbar-overlap investigation and fix

### Cause found

The Navbar intercepted every section link with `preventDefault()`, queried the target manually, and applied one hardcoded `-140px` offset before calling `window.scrollTo`. This bypassed native fragments, prevented URL/history updates, and used the same clearance despite different desktop and mobile navbar geometry.

The screenshot itself was not available as a standalone image file in this workspace, and no browser surface was available for live reproduction. Source inspection confirms the hardcoded interception was the section-target navigation mechanism.

### Scoped correction

- Desktop and mobile section links now retain their real `href` fragments and use native anchor navigation.
- Link clicks only close the mobile menu; they no longer calculate or force a scroll position.
- Top-level homepage targets except `#hero` share `scroll-margin-top` through `main > [id]:not(#hero)`.
- The clearance is `7.5rem` below the desktop breakpoint and `9rem` from `1024px` upward.
- Smooth anchor scrolling is enabled only under `prefers-reduced-motion: no-preference`.
- Stable navigation keys now use `item.href` rather than array indexes.

This preserves copyable fragments, browser history, default keyboard activation, the existing Project Index anchors, and the Project chapter-specific scroll margins. The Project Index implementation was not edited.

The unchanged logo link still uses its existing manual scroll-to-top handler; it is separate from section-target navigation.

### Scope of the fix

The correction addresses heading overlap after navigating to a top-level section target. A fixed navbar can still overlay content during ordinary free scrolling; preventing all such overlap would require changing the navbar positioning or reserving permanent page space and was intentionally not introduced here.

## 8. Responsive behavior

### Skills

- Mobile: one column with clear dividers and spacing.
- Tablet: two columns, with Design spanning the final row to avoid compression.
- Desktop: three balanced columns with wider horizontal gaps.
- Technology names are simple wrapping text and create no horizontal scrolling controls.

### Education

- The timeline line and markers remain near the left edge at every viewport.
- Content is offset with responsive left padding rather than fixed widths.
- Current programs stack through tablet widths and become two columns only at `lg`.
- Stage labels, periods, programs, and locations wrap naturally with no fixed height.
- The earlier foundation remains a single readable milestone.

These behaviors are source-implemented but could not be visually exercised in a browser in the current environment.

## 9. Accessibility and motion decisions

- Skills and Education remain labeled semantic `<section>` elements with logical headings.
- Skills categories remain `<article>` elements and technology names use list semantics.
- Education stages use an ordered list; each institution is a labeled `<article>`.
- The connecting line and markers are hidden from assistive technologies.
- Source order remains logical on mobile and for assistive technology.
- No information depends only on color, hover, or animation.
- Motion was reduced to a 12px opacity/vertical reveal over 400ms.
- `useReducedMotion` removes the initial transform and sets transition duration to zero.
- Native section navigation preserves keyboard behavior and fragment semantics.
- CSS smooth scrolling is disabled automatically for reduced-motion users.

## 10. Validation results

### Before refinement

| Check | Result |
| --- | --- |
| `npm run lint` | Passed with 0 errors and 0 warnings. |
| `npm run build` | Passed; Vite transformed 1,966 modules. Existing Browserslist notice remained. |

### After refinement

| Check | Result |
| --- | --- |
| `npm run lint` | Passed with 0 errors and 0 warnings. |
| `npm run build` | Passed; Vite transformed 1,966 modules. Existing Browserslist notice remained. |
| `npm audit --omit=dev` | Passed with 0 production vulnerabilities. |
| `git diff --check` | Passed with no whitespace errors. Git displayed only existing LF-to-CRLF working-copy notices. |
| Source guards | Confirmed curated Skills fields, preserved hidden content, stable Education stage references, native Navbar fragments, and shared section offsets. |

No dependency was installed, removed, or upgraded during this refinement.

## 11. Browser testing results and limitations

Browser verification was attempted through the available computer-use integration. It returned no browsers and no application windows.

The following remain unverified in a rendered browser:

- Skills balance and density at 1440px, 768px, and 390px.
- Education line/marker alignment, surface balance, and long-title wrapping.
- Absence of horizontal overflow at each target viewport.
- Navbar clearance after clicking Skills, Education, Projects, About, and Contact.
- Direct fragment loading and browser back/forward behavior.
- Mobile-menu closure timing during native anchor navigation.
- Reduced-motion rendering, keyboard traversal, and runtime console output.
- Confirmation that Projects remains visually identical.

The successful production build validates compilation, imports, Tailwind generation, and dependency resolution, but it is not visual or interaction UAT.

## 12. Outstanding issues

- Confirm the relationship between the University of Cebu and Lithan EduCLaaS current-study records.
- Confirm whether both `2023–Present` statuses remain current and whether 2027 should eventually be published.
- Browser/device UAT is still required before treating responsive layout or navbar clearance as verified.
- Ordinary free scrolling can naturally place content behind the fixed navbar; only target-navigation clearance was addressed.
- The Navbar's mobile button naming, focus styling, expanded state, Escape behavior, and the logo's manual smooth scrolling remain previously documented accessibility debt outside this refinement.
- The existing Browserslist `caniuse-lite` notice remains.

## 13. Recommendations for Phase 4

1. Run browser UAT at approximately 1440px, 768px, and 390px, including every top-level navigation target and direct-fragment reload.
2. Verify keyboard, reduced-motion, 200% zoom, screen-reader, and mobile-menu behavior.
3. Confirm education pathway documentation and publish final current/expected dates.
4. Address the remaining Navbar disclosure and focus semantics as a dedicated accessibility change.
5. Add automated fragment-navigation, responsive smoke, and accessibility checks before release.
6. Continue into the next explicitly approved section without altering the completed Projects, Skills, or Education content models.
