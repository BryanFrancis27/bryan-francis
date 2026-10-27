# Portfolio V3 — Section Reorder Report

Date: October 27, 2026 (Asia/Manila)

## Starting branch and Git state

Branch: `feat/portfolio-v3-foundation`.

The worktree was already dirty, with no staged changes. Starting status:

```text
 M index.html
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
?? PORTFOLIO_V3_DYNAMIC_ISLAND_REPORT.md
?? PORTFOLIO_V3_FLOATING_DOCK_REPORT.md
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

All prior changes were preserved. No dependencies were installed, and nothing was committed, pushed, or deployed.

## Files changed in this task

- `src/App.jsx`: moved the existing Projects component immediately after the Home/Hero wrapper.
- `src/constants/index.jsx`: moved Projects before About and Tech Stack in `NAVIGATION_LINKS`.
- `PORTFOLIO_V3_SECTION_REORDER_REPORT.md`: added this report.

A before/after SHA-256 comparison of every file under `src` confirmed that only `App.jsx` and `constants/index.jsx` changed during this task; no source files were added or removed. Existing branding, styles, component internals, project data, and assets were preserved.

## Section and dock order

Previous page order: Hero → About Me → Tech Stack → Projects → Contact → Footer.

New page order: Hero → Projects → About Me → Tech Stack → Contact → Footer.

Both dock orientations now use Home (house), Projects (folder), About (user), Tech Stack (code), Contact (mail). Navbar already prepends Home to the shared navigation list, so reordering that list updates both orientations without adding configuration. Icon mapping, tooltips, glass styling, amber indicator, keyboard focus, and EE branding were preserved. The old top navigation was not reintroduced.

Education remains absent from the rendered main page and navigation. The unused Education component and retained editorial project components were not deleted or reintroduced. Education information in the About Background dialog was unchanged.

## Active-section tracking

No new tracking code or listeners were needed. `Navbar.jsx` derives its section elements and indicator indices from the same destinations used to render the dock. They now resolve in this order: `home`, `projects`, `about`, `skills`, `contact`.

The existing algorithm reads actual element positions, chooses the last section whose top crosses a stable reading line at 30% of viewport height, and selects Contact at the page bottom. It batches updates through requestAnimationFrame, uses a passive scroll listener, observes section resizing, and handles resize, hashchange, and pageshow. This avoids intersection-ratio competition between long and short sections. `aria-current="location"` and the amber indicator still derive from the active section. There is no active IntersectionObserver to retune.

Source review found no additional live section-order arrays, positional CSS selectors, section progress indicators, or scroll helpers requiring changes. Existing project/category numbering is local to its content and was preserved. Runtime activation and flicker behavior remain unverified because browser tools were unavailable.

## Anchors, spacing, and Hero

All existing IDs and native fragment links were preserved: `#home`, `#projects`, `#about`, `#skills`, and `#contact`. The Home wrapper still includes the top EE signature and Hero. Both EE links return to `#home`; Hero CTAs still target `#projects` and `#contact`.

Native anchors retain browser fragment/history behavior without scroll interception. The existing 2rem scroll margin and Home's zero offset remain appropriate to the floating dock; no obsolete fixed-header offset was found. Existing reduced-motion-aware smooth scrolling remains intact.

Hero markup, typography, portrait, layout, and padding were unchanged. Projects keeps its existing section padding immediately after Hero, with no new gap or spacer. About's existing top separator now separates Projects from About. Visual spacing and heading visibility still need browser review.

## Preserved Project and About functionality

Projects still renders the same five records: AutoCare+, LunarLedger, DoBu Martial Arts, Meals on Wheels, and BryanOS. Gallery breakpoints, card styling, screenshots/placeholders, descriptions, conditional links, and detail buttons were unchanged.

Project selection still passes the selected project and trigger to the existing dialog. Source review confirms that showModal, close-button/Escape handling, body scroll restoration, and trigger focus restoration remain intact. These interactions were not exercised live.

About retains its biography, portrait, Background/Experience/Resume buttons, amber hover/scale styling, and glass dialogs. Employer names, dates, education, resume URLs, preview, and download behavior were unchanged. Its portal and native showModal still place the dialog in the browser top layer above the dock; focus placement, closing animations, Escape handling, reduced-motion checks, and focus restoration were preserved by leaving the component untouched. These interactions were not exercised live.

Tech Stack content and `id="skills"`, Contact validation and EmailJS configuration, and Footer content were unchanged. No contact form messages were sent.

## Responsive and accessibility review

Static source review confirms the new main-content DOM reading order, existing h1/h2/h3 hierarchy, labeled anchors, decorative dock icons, aria-current, and visible focus rules. Content controls follow the reordered DOM; the existing dock remains before main content. No tabindex or CSS visual-order override was introduced.

Existing responsive gallery, Hero, About, Tech Stack, Contact, and Footer styles were preserved. The bottom dock retains body bottom padding and scroll-padding-bottom of `100px + safe-area-inset-bottom`, and its own safe-area positioning. No new clipping or scroll container was introduced. Reduced-motion CSS and Framer Motion handling were preserved.

| Requested width | Expected existing dock mode | Browser result |
| --- | --- | --- |
| 1440px | Vertical side dock, when viewport height is at least 380px | Not run |
| 1024px | Horizontal bottom dock | Not run |
| 768px | Horizontal bottom dock | Not run |
| 390px | Horizontal bottom dock | Not run |
| 320px | Horizontal bottom dock | Not run |

No browser or native app connection was available: Computer Use returned empty browser/app inventories and a native-pipe connection error. Consequently, no visual, overflow, keyboard traversal, fragment back/forward, scroll indicator, modal, reduced-motion, or bottom-dock overlap test is claimed as passed.

## Validation results

- `npm run lint`: passed, exit 0.
- `npm run build`: passed, exit 0. The build used expanded filesystem access for Node's Windows path resolution.
- `npm audit --omit=dev`: passed, exit 0; found 0 vulnerabilities. The restricted attempt failed to reach the audit endpoint; the read-only retry with registry access succeeded.
- `git diff --check`: passed, exit 0. Git emitted existing LF-to-CRLF conversion notices, with no whitespace errors.

## Outstanding issues

Browser verification at the five requested widths remains outstanding, including scrolling/active indicators, anchors/history, modal opening/closing/focus, reduced motion, horizontal overflow, and mobile form/footer clearance. No implementation defect was identified by source review or the completed code checks.

The build reports an outdated caniuse-lite database. No dependency or lockfile update was made during this focused task.
