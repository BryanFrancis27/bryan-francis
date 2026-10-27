# Portfolio V3 Floating Dock Report

Date: 2026-10-27 (Asia/Manila)

## 1. Starting Git state

Branch: `feat/portfolio-v3-foundation`; HEAD: `40d881d437100e7462377354d90848db3d0e1539`.

The worktree was already dirty. Modified tracked paths at entry:

```text
package-lock.json
package.json
src/App.jsx
src/components/About.jsx
src/components/Card.jsx
src/components/ContactForm.jsx
src/components/Education.jsx
src/components/Footer.jsx
src/components/HeroSection.jsx
src/components/Navbar.jsx
src/components/Projects.jsx
src/components/Skills.jsx
src/constants/index.jsx
src/index.css
```

`src/components/SkillBar.jsx` was already deleted. Existing untracked paths:

```text
PORTFOLIO_V1_CODEBASE_AUDIT.md
PORTFOLIO_V1_PROJECT_INVENTORY.md
PORTFOLIO_V3_ABOUT_INTERACTION_REPORT.md
PORTFOLIO_V3_AMBER_REDESIGN_REPORT.md
PORTFOLIO_V3_DYNAMIC_ISLAND_REPORT.md
PORTFOLIO_V3_PHASE_1_REPORT.md
PORTFOLIO_V3_PHASE_2_REPORT.md
PORTFOLIO_V3_PHASE_3_REFINEMENT_REPORT.md
PORTFOLIO_V3_PHASE_3_REPORT.md
public/resume/
src/assets/BryanOS_preview.png
src/assets/LunarLedger_preview.png
src/components/AboutInfoDialog.jsx
src/components/Portrait.jsx
src/components/ProjectArchive.jsx
src/components/ProjectCard.jsx
src/components/ProjectChapter.jsx
src/components/ProjectDetails.jsx
src/components/ProjectIndex.jsx
src/components/ProjectLinks.jsx
src/components/ProjectMedia.jsx
src/components/SocialLinks.jsx
src/data/
```

Existing changes were preserved. No commit, push, deployment, dependency change, or asset replacement was performed. Git diffs against HEAD include earlier work and are not a task-only diff.

## 2. Files changed by this task

- `src/components/Navbar.jsx`: replace the horizontal island with an icon dock; adapt existing tracking.
- `src/App.jsx`: introduce a normal-flow branding area and `#home` wrapper.
- `src/index.css`: dock, indicators, tooltips, responsive clearance, branding, Hero spacing, and anchor offsets.
- `src/constants/index.jsx`: rename navigation label Skills to Tech Stack; retain `#skills`.
- `src/components/Footer.jsx`: align its Home link with `#home`.
- `index.html`: add `viewport-fit=cover` for safe-area support.
- `PORTFOLIO_V3_FLOATING_DOCK_REPORT.md`: this report.

## 3. Logo separation and placement

The original `src/assets/logo.png` is reused unchanged at 72px in the top-left branding area, aligned with `.section-wrap`. The branding area scrolls normally and links to `#home`. The dock has a Lucide House icon instead of the monogram. The existing footer monogram remains at the document end. The existing Hero `#hero` ID remains available for legacy links.

## 4. Desktop dock

At widths of at least 1360px and heights of at least 380px, the dock is vertical and centered along the left viewport edge. Its width is 64px including padding/borders; targets are 44px with 6px gaps. A clamped gutter offset leaves the main column centered. The dark surface uses 72% opacity, blur, saturation, a thin border, and neutral shadows. A more opaque fallback applies without backdrop-filter support.

The five destinations are Home, About, Tech Stack, Projects, Contact. Existing Lucide icons are reused with matching sizes and stroke widths. Only active/hovered controls receive amber glow. The active control has a tinted background and amber icon; one shared 3px by 24px amber indicator moves vertically in 250ms.

## 5. Mobile dock

Below 1360px, or in windows shorter than 380px, the dock becomes a centered horizontal bottom capsule. It sits 14px above the bottom safe area. The active indicator becomes a 12px by 3px pill inside the active tile. All targets remain 44px.

Calculated capsule width: `5 * 44 + 4 * 6 + 2 * 9 + 2 * 1 = 264px`. This leaves 56px at 320px, 96px at 360px, 126px at 390px, and 166px at 430px. These are CSS calculations, not rendered viewport tests or proof of whole-page overflow behavior.

## 6. Active-section tracking

Retained the existing lightweight requestAnimationFrame-coalesced scroll tracker and ResizeObserver. The reading line is now 30% of viewport height, independent of the navigation rectangle. It selects the last section whose start has crossed that line, which handles long sections and gaps without intersection-ratio competition. At the document bottom it selects Contact, including when Contact cannot reach the reading line.

Scroll, resize, hashchange, pageshow, initial mount, and observed section resizes schedule updates; cleanup removes listeners, observer, and pending frame. Links remain native anchors with no click interception or history replacement. Home targets the branding/Hero wrapper. Direct fragments and Back/Forward retain browser behavior. Active links expose `aria-current="location"`. Runtime boundary stability and history behavior remain unverified.

## 7. Tooltips

Desktop tooltips sit to the right of the controls and appear on hover with a fine pointer or keyboard focus. A transparent bridge permits moving onto the tooltip. Escape dismisses them until a fresh focus or pointer entry. Hover tooltips are disabled for the bottom layout and touch input; keyboard focus still shows labels above the bottom dock. Accessible names come from link labels independently of tooltips.

## 8. Responsive spacing

The primary content width is 1152px. At 1360px its left edge is 104px; the side dock occupies approximately x=21–85px, leaving approximately 19px before that column. Skills uses a 1280px wrapper with 64px desktop padding, placing its content on the same 1152px grid. The breakpoint therefore exceeds the suggested 1024px to avoid content overlap at intermediate widths. Tooltips can briefly extend over the content gutter.

No global left padding was added. Removed the fixed island header offsets and replaced anchor clearance with 2rem. Hero top padding is reduced from 9rem to 4rem, and from 8rem to 3rem on mobile, to account for normal-flow branding. The bottom layout adds 100px plus bottom safe-area document-end padding and scroll-padding-bottom. This provides clearance beyond the footer and helps keep focused/anchored controls above the dock.

## 9. Accessibility and motion

Semantic labeled nav; individually named anchor links; decorative icons; active location semantics; explicit 2px focus outlines; 44px targets; neutral inactive icons and amber active/hover colors. Background/color transitions use existing 200ms rules; the indicator uses a restrained 250ms transition. Existing global reduced-motion rules disable transitions, animations, and smooth scrolling. No new animation dependency or spring behavior was introduced.

## 10. Regression checks

Source review confirmed:

- About Background, Experience, and Resume controls and dialog contents are unchanged.
- About and Project dialogs still use `showModal()`, preserving native top-layer rendering, background inertness, focus containment, and their existing focus restoration handlers. The dock's z-index does not bypass the modal top layer.
- Project composition, cards, data, media, galleries, links, and detail code were not edited.
- Hero CTA fragments remain `#projects` and `#contact`.
- Education is absent from App composition and navigation. Background academic content remains in AboutInfoDialog; retained education files/data were not edited.
- The resume file and logo artwork were not edited. Current SHA256 values: logo `82413B8D86E49D10BFB400AFAA069076A96FDF946457F3249BA7FBB1CDBC9AA7`; resume `7CE4E64996810337ADAA66E8E53E7BEC86F7ABAB1B48203FE5B53B2E71E2AA95`.

These source checks do not constitute runtime regression passes.

## 11. Required commands

| Command | Result |
| --- | --- |
| `npm run lint` | Passed; zero warnings |
| `npm run build` | Passed; Vite transformed 1963 modules |
| `npm audit --omit=dev` | Passed; zero vulnerabilities |
| `git diff --check` | Passed; Git emitted line-ending conversion notices |

Initial sandbox build failed with EPERM reading `C:\Users\Bryan`; audit initially could not reach the registry/write npm logs. A final lint rerun encountered the same sandbox EPERM after an earlier successful run. All three checks succeeded with approved elevated execution. Build also reports an outdated caniuse-lite database; dependencies were not changed for this navigation task.

## 12. Browser testing limitations

Computer-use discovery returned no connected browsers and no native apps; the native pipe was unavailable. No visual screenshots, viewport resizing, actual device safe-area tests, pointer/keyboard interactions, modal focus tests, direct-anchor/history tests, scroll tracking tests, or reduced-motion runtime tests were performed.

## 13. Outstanding issues

Browser validation remains required at desktop widths including 1360px and at 430/390/360/320px. Check section boundaries, Contact at document end, tooltips/focus/Escape, direct anchors, Back/Forward, both modal families and focus restoration, Hero CTAs, reduced motion, and whole-page horizontal overflow. No known lint/build failures remain. Visual and interactive acceptance is pending browser access.
