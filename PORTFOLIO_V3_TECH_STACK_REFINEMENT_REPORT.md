# Portfolio V3 — Tech Stack Refinement

Date: October 30, 2026

## Starting Git state and scope

The only initial uncommitted change was `public/resume/Bryan_Francis_Encarnacion_Resume.pdf`. It was left untouched. Its SHA-256 before and after implementation is `A869FFF249A6149B7B4B0AF41A9C242CD472AB316DDE80A89C39030EBC5678C2`.

Implementation files modified:

- `src/components/Skills.jsx`
- `src/data/skills.js`
- Skills-specific rules in `src/index.css`
- This requested report

No dependencies were installed. No commit, push, or deployment was performed. Hero, portraits, dock, projects, dialogs, About, Contact, Footer, global palette, page order, anchor offsets, and mobile navigation clearance were not edited.

## Previous categorization issues

The section displayed Frontend, Backend, and Design as vertical text lists. Backend mixed application frameworks with databases and cloud services, and development tools had no dedicated category. The grid used three columns starting at the tablet breakpoint. Display headings abbreviated the fuller data titles, reducing category clarity.

## Final display mapping

The user's approved brief supplies the exact labels and establishes their basis in the résumé and portfolio content. No additional technology or experience claims were introduced. The modified résumé PDF was not changed or independently audited for each label.

| Category | Technology tags, in display order |
| --- | --- |
| 01 / Frontend Development | React; Next.js; TypeScript; JavaScript; HTML5 / CSS3; Tailwind CSS; Bootstrap; Framer Motion |
| 02 / Backend & APIs | PHP / Laravel; Java / Spring Boot; Node.js; Next.js API Routes; REST APIs; Firebase Admin SDK |
| 03 / Databases & Cloud | PostgreSQL; MySQL; Supabase; Firebase / Firestore; Firebase Authentication |
| 04 / UI/UX & Design | Figma; Wireframing; Prototyping; Responsive Design |
| 05 / Development Tools & AI | Git; GitHub; VS Code; Postman; ChatGPT / Codex; GitHub Copilot; Claude AI; Gemini AI |

AI tools appear only as development tools; no AI model development expertise or proficiency rating is claimed.

## Data structure

Source search established that only `Skills.jsx` consumes `SKILL_GROUPS`; `PROFESSIONAL_SKILLS` has no current source consumer. The latter export is unchanged.

`SKILL_GROUPS` retains existing stable IDs (`frontend`, `backend-software-engineering`, `interface-design`) and adds `databases-cloud` and `development-tools-ai`. Array order determines numbering and placement. Each group provides `title` and `displayTechnologies`; unused `displayTitle` fields were removed after inspecting consumers. Existing `description`, `technologies`, and `capabilities` fields remain intact as legacy detail. These retained detail fields are distinct from the approved curated display lists. New groups contain only the fields needed for display.

## UI and styling

The section retains `id="skills"`, the CAPABILITIES eyebrow, and “My Tech Stack.” with an amber period. The supporting subtitle reads “The technologies and tools behind my work.” The header stacks on smaller screens and places the subtitle to the right from 1024px.

Every category uses a thin graphite top divider, an amber number with slash, a full category heading, and a wrapping semantic list of informational tags. Tags use the existing surface, border, and primary text tokens, 5px corners, compact padding, and 0.8rem text. Category headings use 1.125rem text. Groups have no filled card background, shadow, fixed height, or decorative icon.

Hover-capable devices receive an amber tag border and faint amber background with a 200ms color transition. Tags have no pointer cursor, click handler, button role, link, or tab stop. There is no movement, scaling, or glow.

## Responsive behavior

CSS defines one column below 768px, two columns from 768px through 1023px, and three columns from 1024px. Normal grid placement puts the final two desktop groups in columns one and two. Row spacing is 3rem, without fixed heights. Zero-minimum grid tracks, `min-width: 0`, wrapping tag lists, maximum tag widths, and `overflow-wrap: anywhere` allow long labels to fit narrow containers.

The original section padding and content container are retained, preserving spacing before Contact. Existing anchor scroll offsets and mobile dock clearance rules are unchanged.

## Motion and accessibility

The previous Framer Motion wrappers used `initial: false` with in-view targets and delayed transitions. Skills now uses static section/header/article markup, with no entrance animation or visibility dependency on viewport observers. All five categories remain visible after React renders even if animation behavior fails. Reduced-motion preferences disable tag transitions.

The semantic section is labelled by its h2, each article by its h3, and every tag is an li in a labelled ul. Decorative category numbers are hidden from assistive technology. Existing high-contrast palette tokens are reused. Information never depends on hover.

This remains a client-rendered React app; static Skills markup does not add a new no-JavaScript rendering fallback for the whole application.

## Validation

- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed; Vite transformed 1,964 modules. The build reported an outdated Browserslist dataset; no dependency update was made.
- `npm.cmd test`: passed, 26/26 existing Contact tests. These use injected senders and do not verify live email delivery or Skills layout.
- `git diff --check`: passed. Git emitted line-ending conversion notices for edited source files; no whitespace errors.
- Source review confirmed approved category order, all 31 labels, retained `#skills`, semantic tags, scoped CSS, and unchanged unrelated source files.
- The initial sandbox attempts failed before application validation with Node `EPERM` resolving `C:\Users\Bryan`. The checks above passed when rerun outside the sandbox.

## Browser testing status and known limitations

Browser visual and interaction testing was unavailable. The computer-use native helper reported: “Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2)”. The alternate surface inventory returned no apps and no browsers.

The requested 1440px, 1024px, 768px, 390px, and 320px viewport checks, 200% browser zoom, rendered contrast/legibility, hover appearance, overflow, keyboard navigation, dock persistence and anchor navigation, and Hero/Project Details animation regression checks remain unverified in a browser. Breakpoints and overflow handling were inspected in source only. Existing unrelated source and animation files were unchanged; passing CLI checks does not establish visual or interactive browser correctness.
