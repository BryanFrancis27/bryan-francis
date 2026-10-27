# Portfolio V3 — About Interaction Report

Date: 2026-10-27 (Asia/Manila)

## Scope and starting Git state

The working tree already contained extensive uncommitted V3 changes. Nothing was staged at the start. No reset, stash, dependency change, commit, push, or deployment was performed. Existing unrelated changes and old assets were preserved.

Starting `git status --short`:

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
?? PORTFOLIO_V3_AMBER_REDESIGN_REPORT.md
?? PORTFOLIO_V3_PHASE_1_REPORT.md
?? PORTFOLIO_V3_PHASE_2_REPORT.md
?? PORTFOLIO_V3_PHASE_3_REFINEMENT_REPORT.md
?? PORTFOLIO_V3_PHASE_3_REPORT.md
?? src/assets/BryanOS_preview.png
?? src/assets/LunarLedger_preview.png
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

## Files changed by this task

- `src/components/About.jsx`: three action buttons, selected panel and trigger state, shared dialog integration.
- `src/components/AboutInfoDialog.jsx` (new): native modal lifecycle and three information panels.
- `src/index.css`: shared portrait variant glow refinements and scoped About dialog/button styling.
- `public/resume/Bryan_Francis_Encarnacion_Resume.pdf` (new): exact original PDF copy.
- `PORTFOLIO_V3_ABOUT_INTERACTION_REPORT.md` (new): this report.

The production build regenerated ignored `dist/` output. The existing Portrait component, Hero source, biography, main Education, Navbar, Skills, Projects, Contact, Footer, and dependency manifests were not edited by this task.

## Portraits and buttons

Both portraits retain the existing shared `Portrait` component, its variant classes, silhouette placeholder, and future-image configuration. The shared circular container provides the ring and shadows for either placeholder or photograph. CSS hover rules are gated by `(hover: hover)`.

Default amber halos remain visible. Hero hover brightens the ring, increases two outer shadows, increases the radial halo opacity, and scales to 1.02. About hover uses smaller, softer shadows and no scale. Transitions use shadows, border color, opacity, and transform; there are no continuously animated filters. Reduced motion removes transitions and scale. Decorative portraits retain the default cursor and have no click action.

Background, Experience, and Resume replace the About “Let’s connect” action below the unchanged biography. They use semantic buttons, existing Lucide icons, consistent 148px bases, wrapping flex layout, dark surfaces, neutral borders, amber hover/focus borders, and a separate visible keyboard outline. Existing Contact content was left intact.

## Shared glass dialog and accessibility

One selected panel state mounts one reusable `AboutInfoDialog`. A body portal avoids About typography selectors and ancestor clipping. Native `showModal()` supplies modal focus containment and inert background content.

The dark backdrop uses 12px blur and darkening. The floating surface uses an amber-tinted border, restrained top light, rounded corners, shadows, and 24px backdrop blur. An opaque dark base remains when backdrop filters are unsupported. The navbar stays behind the native top-layer backdrop.

The dialog title is associated through `aria-labelledby`. A labeled 44px close button receives initial focus and stays in the non-scrolling header. Escape and the close button share dismissal logic. Cleanup closes the native dialog, restores the previous root overflow and scrollbar-gutter inline values, and focuses the connected original trigger with `preventScroll`. Root scrolling is locked while open; a stable scrollbar gutter is requested to avoid width jumps. The content area scrolls internally and contains scroll overshoot.

Opening uses a 180ms fade with 8px movement; closing uses a 120ms fade. Both are bypassed when reduced motion is enabled. Repeated dismissal is guarded. No modal dependency was added. Backdrop-click dismissal is intentionally omitted.

## Résumé grounding

No PDF was attached to this particular brief. A local document with the exact requested source name was found at:

`../BryanOS/public/ENCARNACION - RESUME (ATS).pdf`

Its compressed text streams were decoded read-only with Node's built-in zlib and inspected. The employment and education text matches the supplied brief. The PDF was copied without modifying its contents.

Background displays BS in Information Technology, Major in Software Engineering; University of Cebu (Philippines) & EduCLaaS Lithan (Singapore); Expected 2027. The additional Applied Degree in Software Engineering is explicitly In Progress. No institutional award relationship or completed additional degree is inferred. Main Education data remains untouched.

Experience contains exactly two records:

1. Vision2Creation — Software Engineer (Contractual), January 2026 – June 2026. Four concise contributions cover SaaS technologies, reporting/communication/notification/workflow features and real-time sync, role-based access and responsive interfaces, and architecture/migration/testing/production collaboration.
2. ClaaS2SaaS Pte. Ltd. (Singapore) — PHP Developer – Technology Developer, November 2024 – December 2025. Three contributions cover Laravel/web technologies, frontend/backend/testing/debugging/deployment, and Conversational Marketing AI/API integration.

Neither role is labeled ongoing. No metrics, extra employers, or unsupported achievements were added.

## PDF asset and actions

Bundled path: `public/resume/Bryan_Francis_Encarnacion_Resume.pdf`.

The Resume panel contains the requested name, portfolio presentation title, four overview bullets, PDF actions, a preview fallback note, and a bounded `<object type="application/pdf">` preview. Both actions and the object use one BASE_URL-aware URL. View Full Resume uses a new tab with `noopener noreferrer`; Download Resume uses a real `download` link. Actions precede the preview so mobile users can reach them first.

Verified source, public copy, build copy, and HTTP-served bytes match:

- Size: 291,995 bytes.
- SHA-256: `7ce4e64996810337adaa66e8e53e7bec86f7abab1b48203fe5b53b2e71e2aa95`.
- Production preview request: `http://127.0.0.1:4173/resume/Bryan_Francis_Encarnacion_Resume.pdf`.
- Response: HTTP 200, Content-Type `application/pdf`, byte-for-byte identical to source.

This verifies the bundled document and action target. Actual browser download handling, opening a new tab, and PDF plugin rendering were not exercised. The original PDF layout was not rendered or changed.

## Responsive implementation and testing limits

Source-level responsive treatment: maximum dialog width 780px; viewport margins of 1rem; dynamic viewport height limit with vh fallback; internal scrolling; fixed-in-layout close header; wrapping action rows; smaller mobile padding; academic content becomes one column at 540px; PDF actions become full width; preview height reduces to 240px. Long headings/content can wrap. Hero/About retain the existing responsive portrait sizing.

Browser discovery returned no browsers or native apps and reported: “Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2).” Therefore no desktop/tablet/mobile screenshot, hover, smoothness, keyboard, screen-reader, reduced-motion emulation, console, or overflow check is reported as passed.

Remaining browser checks:

- Compare Hero/About default and hovered glow, ring brightness, and smoothness.
- Open each panel and confirm the correct heading, text, and exact employment dates.
- Confirm visible page/navbar blur and native background inertness.
- Cycle Tab/Shift+Tab within each dialog; close with Escape and the close button; confirm focus returns to each triggering button and scrolling restores without layout shift.
- Exercise embedded PDF support, new-tab action, and actual download; repeat keyboard checks with the PDF viewer focused.
- Check desktop, tablet, narrow mobile, short viewports, and reduced-motion settings for clipping and overflow.
- Inspect console for runtime errors and verify the opaque fallback without backdrop-filter support.

## Validation results

- `npm run lint`: PASS, zero warnings.
- `npm run build`: PASS, Vite 5.3.4, 1,965 modules transformed.
- `npm audit --omit=dev`: PASS, zero vulnerabilities.
- `git diff --check`: PASS; Git emitted only existing line-ending conversion notices.
- Built PDF presence, size, SHA-256 equality: PASS.
- Production PDF URL response and source-byte equality: PASS.

The first sandboxed build failed with parent-directory `EPERM` and the first audit could not reach the registry. Both requested commands succeeded after retrying with approved normal filesystem/network access. No dependency updates were needed.

## Known issues

The build reports an outdated caniuse-lite database. Dependencies were kept unchanged within this task's scope. Browser behavior remains pending the manual checks above, particularly native PDF viewer keyboard behavior and device-specific inline PDF support. No other issue was identified by lint/build/static review; that is not a claim of completed visual or accessibility UAT.
