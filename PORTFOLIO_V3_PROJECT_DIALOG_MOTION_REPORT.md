# Portfolio V3 — Project Dialog Motion Report

## Initial implementation and investigation

Read the supplied Project Dialog brief before edits. The starting working tree already contained uncommitted changes to `HeroSection.jsx`, `Navbar.jsx`, `ProjectDetails.jsx`, and `index.css`, plus the untracked `PORTFOLIO_V3_MOTION_REFINEMENT_REPORT.md`. Those changes were preserved, including the prior navigation stability fix.

`ProjectCard.jsx` passes the selected project and the actual View Details button to `Projects.jsx`. `Projects.jsx` conditionally mounts one shared `ProjectDetails` component for all five records: AutoCare+, LunarLedger, DoBu Martial Arts, Meals on Wheels, and BryanOS. No project-dependent component key or custom modal hook is involved.

At the start of this task, Project Details already used a native `<dialog>`, Framer Motion's imperative `animate` API, a guarded closing function, delayed native close on unmount, and native `::backdrop` transitions. It would be inaccurate to report that those animations were absent. Source inspection identified these remaining reliability gaps:

- Opening setup ran in a passive effect, allowing a possible visible frame before the initial animation state was established.
- The opening backdrop relied on `@starting-style`; browsers without support showed the final dark/blurred backdrop immediately.
- Trigger changes reset the closing ref but did not reset the rendered closing state, allowing an obsolete closing class to survive into a new opening.

These are source-supported causes of potentially abrupt or inconsistent transitions. The reported visual symptom could not be reproduced because browser tooling was unavailable.

## Files changed in this task

- `src/components/ProjectDetails.jsx`: establish initial appearance in a layout effect; coordinate explicit opening/open/closing phases; focus Close explicitly; cancel pending opening frames during cleanup; reset the phase when the trigger changes; begin exit after the closing class commits.
- `src/index.css`: only the project backdrop block changed in this task. Replaced `@starting-style` with `.project-dialog.is-opening::backdrop`.
- `PORTFOLIO_V3_PROJECT_DIALOG_MOTION_REPORT.md`: this report.

No changes were made in this task to the navigation dock, its positioning, its animation rules, Hero, About, other sections, project data/media/order, card layout, or dependencies. The earlier motion report remains unchanged and describes the earlier implementation; this report supersedes its dialog opening/backdrop details.

## Opening animation

The dialog's layout effect establishes opacity 0, `translateY(12px) scale(.94)`, and its opening backdrop class before calling `showModal()`. This setup occurs before paint. Framer Motion animates opacity to 1, scale to 1, and Y to 0 over 300ms with `[.22, 1, .36, 1]` easing. There is no spring, bounce, rotation, image wait, or arbitrary loading timer.

The actual native backdrop's computed starting style is resolved after `showModal()`. A cancellable animation-frame callback then releases the opening class, letting the backdrop transition to its final appearance without relying on `@starting-style`. This callback checks mount and closing state before changing the phase.

## Closing animation and lifecycle

Close and Escape share the guarded `requestClose` path. The native cancel event is prevented so the browser does not close immediately. Repeated requests are ignored, the opening animation is stopped at its current values, and the phase becomes `closing`.

Once the closing class commits, a layout effect starts the corresponding 200ms Framer Motion fade to opacity 0, scale .97, and Y 6 with ease-in. Its completion callback clears the selected project through the parent. Cleanup then calls native `.close()`, restores scrolling styles, and returns focus to the connected triggering button. Modality and background scroll locking remain active through the exit.

Animation identity, mounted state, and the closing guard protect against obsolete completions. Cleanup stops controls, cancels the opening frame, and removes the preference listener. There are no timeout-based closing timers. The completion error callback also requests cleanup if an exit promise rejects.

Trigger changes reset both phase and animation setup without introducing component keys. Content updates retain the existing native dialog/title association. A fresh selection after completed close creates a fresh opening phase. These paths were reviewed in source, not exercised in a browser.

## Glass backdrop

The existing native `::backdrop` transitions background color and standard/WebKit backdrop-filter over 240ms. Final values are `rgba(3, 3, 5, .72)` and 10px blur. The opening phase is transparent with zero blur; the closing phase transitions back to those values over 200ms with ease-in. CSS transitions can reverse from their current values when Close interrupts opening.

Darkening remains functional when backdrop filtering is unsupported. No separate global overlay was added. Native top-layer ordering places the backdrop above normal page elements, including the mounted dock.

## Focus and accessibility

- Retained native modal semantics, focus containment, background inertness, and `aria-labelledby="project-dialog-title"`.
- Explicitly focus the existing autofocus Close button after `showModal()` with `preventScroll`.
- Retained the visible Close control, native cancel interception, and focus restoration to the original View Details button if connected.
- Retained root/body scroll locking and restoration of prior inline overflow and scrollbar-gutter styles.
- Retained the separate internally scrolling content region and non-scrolling Close header.
- Native close and React unmount remove the dialog from keyboard interaction after exit.
- Backdrop-click dismissal was absent before this task and remains absent.

Native semantics and source inspection are not substitutes for actual keyboard or screen-reader testing.

## Reduced motion

The existing `matchMedia('(prefers-reduced-motion: reduce)')` handling shows the dialog immediately at opacity 1 with no transform, bypasses opening-frame scheduling, and closes immediately. The existing global reduced-motion rule disables backdrop transitions.

If reduction becomes enabled while open, the listener cancels pending opening work, stops the active animation, restores visible/untransformed appearance, and settles the phase. If closing, it completes removal immediately. Cleanup removes the listener. No global reduced-motion rules were changed.

## Mobile and responsive behavior

Existing dialog layout is retained: width up to 720px with 16px side margins, centered native placement, maximum height of the dynamic viewport minus 3rem (small-viewport fallback), internally scrollable content, wrapping text, and a nonshrinking Close control. Scale never exceeds 1. Mobile content padding remains 20px.

| Requested viewport | Source review | Browser result |
| --- | --- | --- |
| 1440px | Existing desktop dimensions and scrolling retained. | Not tested |
| 1024px | Existing tablet/desktop dimensions retained. | Not tested |
| 768px | Existing breakpoint and modal padding retained. | Not tested |
| 390px | Existing small-screen margins, padding, wrapping, and internal scrolling retained. | Not tested |
| 320px | Same small-screen rules; Close remains outside scrolling content. | Not tested |

Actual centering, viewport coverage, touch scrolling, horizontal overflow, and bottom-dock layering still require browser verification.

## Navigation scope confirmation

Neither `Navbar.jsx` nor its CSS was edited in this task. It remains mounted as a stable sibling of the main content, with no section-dependent key or animation wrapper. The prior removal of its entrance animation remains intact. Only the dialog and native backdrop animate here; the dock is subdued by the native backdrop while the modal is active. Stationary behavior during interaction has not been browser-tested.

## Validation and limitations

- `npm run lint`: passed, exit 0.
- `npm run build`: passed, exit 0 after retry outside the sandbox. The initial sandbox run failed with Node `EPERM` resolving `C:\Users\Bryan`.
- Build warning: existing Browserslist/caniuse-lite data is outdated; no dependency update was performed.
- `git diff --check`: passed with only Git line-ending conversion notices.
- No test script or existing test files were found. No testing dependency was added.
- Browser inventory returned no apps or browser surfaces and reported `Computer Use native pipe is unavailable` / `The system cannot find the file specified. (os error 2)`.

No browser tests or screenshots were produced. All five project interactions, smoothness, rapid Close/Escape during opening, repeated reopening, focus containment/restoration, no residual overlays, reduced-motion emulation, console errors, dock stability, and the requested viewport sizes remain unverified at runtime. Blur performance and native backdrop transition rendering remain browser/device dependent. The transition risks above were addressed in source; no claim is made that the reported visual symptom was reproduced or visually verified as resolved.

No commit, push, or deployment was performed.
