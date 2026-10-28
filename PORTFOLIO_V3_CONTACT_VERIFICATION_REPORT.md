# Portfolio V3 — Contact Form Reliability & Verification

## Scope and starting Git state

The supplied Contact brief was read before editing. The starting tree contained modifications to `About.jsx`, `HeroSection.jsx`, `Navbar.jsx`, `ProjectDetails.jsx`, and `index.css`, plus three untracked reports: `PORTFOLIO_V3_EXPERIENCE_VISIBILITY_REPORT.md`, `PORTFOLIO_V3_MOTION_REFINEMENT_REPORT.md`, and `PORTFOLIO_V3_PROJECT_DIALOG_MOTION_REPORT.md`. This existing work was preserved.

No real email was sent. No EmailJS or Vercel settings were changed. No dependencies were installed, and no commit, push, or deployment was performed.

## Files inspected and existing functionality

Inspected `src/components/ContactForm.jsx`, Contact-related rules in `src/index.css`, configuration references in repository reports, `package.json`, `.gitignore`, `README.md`, and `vite.config.js`. Also inspected the installed `@emailjs/browser` send, options normalization, parameter validation, and response-handling implementations. Searched for environment files, tracked Vercel metadata, template configuration, and existing tests.

The form already had controlled name/email/message fields, visible labels, required/maxLength attributes, trimming, basic email validation, inline errors, first-invalid-field focus, a synchronous request guard, disabled fieldset, success/failure messages, and direct email links using `ABOUT.email`. It used `emailjs.send`, not `sendForm`. The shared Contact layout, field structure, and button design were retained.

## Problems identified

- Length limits were present in HTML but were not checked again by submit validation.
- Editing a field cleared its error even if the replacement value was still invalid.
- Async completion could update React state after component cleanup.
- Loading state was split between separate boolean and status values.
- Public environment overrides were mixed independently with legacy identifiers, allowing a partially configured account/template combination.
- `.env` and `.env.production` were not ignored; only `*.local` was protected.
- There was no automated test script or Contact test suite.
- `aria-busy` covered the entire form including its live feedback, potentially deferring progress announcements.
- Remote EmailJS template, recipient, reply-to, allowed origins, and Vercel configuration were unavailable for verification.

## Files changed in this task

- `src/components/ContactForm.jsx`: integrate shared validation/request lifecycle; revalidate edited fields after an attempted submit; derive loading from explicit status; improve live feedback and busy/disabled semantics.
- `src/lib/contact-form.js`: normalization, validation, configuration resolution, and an injected submission lifecycle used by the actual React form and mock tests.
- `src/index.css`: one Contact-only disabled-button rule to suppress hover scaling/glow while sending.
- `.gitignore`: ignore `.env` and `.env.*`, while permitting the blank `.env.example`.
- `.env.example`: public configuration names with blank values and a warning against frontend secrets.
- `package.json`: add `npm test` using Node's built-in test runner; no dependency changes.
- `tests/contact-form.test.js`: mocked validation/request lifecycle coverage.
- `PORTFOLIO_V3_CONTACT_VERIFICATION_REPORT.md`: this report and manual verification procedure.

Hero, dock, branding, portraits, project content/dialogs, About/dialogs, Tech Stack, Footer, résumé, and existing reports were not edited in this task.

## Validation and state handling

Name, email, and message are trimmed before validation/submission. Internal message line breaks remain intact. Limits are 100, 254, and 5,000 characters respectively, enforced in both markup and submission validation. Required errors distinguish an empty email from an invalid format. Names are not restricted to an alphabet or punctuation convention, and short legitimate messages are accepted. Email format checks do not establish address existence or deliverability.

Errors are initially shown after submit. Subsequent edits revalidate the edited field, retaining an error for an invalid correction and removing it when corrected. Invalid submissions never invoke the injected sender and request focus on the first invalid field in name/email/message order.

States are `idle`, `sending`, `success`, and `error`. A synchronous in-flight guard is set before invoking the sender, independent of React rendering. During sending, fields and the button are disabled and the button reads “Sending…”. Success is shown only after the SDK promise resolves; only then is the form cleared. This confirms API acceptance, not inbox delivery. Failure shows a safe message, preserves the draft, and enables a user-requested retry. No raw SDK error is shown, and no automatic/background retry is scheduled.

Effect cleanup invalidates the active generation. Late success/failure results cannot clear content or update status after unmount or a cleanup/reactivation cycle. The SDK request itself cannot be cancelled through this wrapper; cleanup suppresses callbacks rather than claiming to retract an already sent request.

## EmailJS integration findings

**Verified:** Installed browser SDK version is 4.4.1. Its `send` implementation accepts service ID, template ID, parameters, and an options object with `publicKey`. The old string-key argument was a compatibility path; the form now uses the options object. The SDK resolves successful HTTP responses and rejects failures. This is consistent with the official [send documentation](https://www.emailjs.com/docs/sdk/send/) and [options documentation](https://www.emailjs.com/docs/sdk/options/).

**Verified:** The three existing public identifiers were compared with the original source and preserved exactly. Their actual values are deliberately omitted here. They remain the fallback when no environment overrides are supplied; their presence does not establish that the account/service/template is valid or production-ready.

**Passed through mocked testing:** The actual submission lifecycle calls the sender with exactly these existing mappings:

| Client field | Submitted template parameter | Remote template verification |
| --- | --- | --- |
| Your name / `name` | `name` | Pending configuration review |
| Email address / `email` | `email` | Pending configuration review |
| Your message / `message` | `message` | Pending configuration review |

No guessed `from_name`, `reply_to`, recipient, or other aliases were added. Remote template contents were not available. The client supplies no recipient override. `ABOUT.email` remains the direct-contact alternative; its presence is not proof of the template's recipient configuration.

**Pending configuration:** Confirm the intended template consumes the existing parameters, sends to the intended recipient, and maps Reply-To to the submitted email as appropriate. Service authorization, account quota, allowed origins, and actual template validity also remain unverified.

## Environment and Vercel configuration

**Verified:** No root `.env*` files existed at the start, no `VITE_EMAILJS_*` values were present in the inspected process environment, and no tracked Vercel project metadata was found. `vite.config.js` uses the standard Vite environment location. This local absence does not establish the state of Vercel settings.

Expected public names:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

**Passed through mocked testing:** With no overrides, the original public configuration remains in use. Once any override is supplied, all three must be nonblank after trimming. Partial or blank explicit configuration blocks the SDK call and shows an understandable direct-email fallback, retaining entered content. This avoids silently combining identifiers from different accounts. Copying the blank example to `.env.local` intentionally leaves the form unavailable until all values are filled.

**Verified:** `git check-ignore` confirms `.env`, `.env.local`, `.env.production`, and `.env.production.local` are ignored. `.env.example` is permitted. No actual configuration values or private credentials were added to that file or this report.

**Pending configuration:** No Vercel connector/session or local project metadata was available to inspect deployed configuration. In Vercel **Project → Settings → Environment Variables**, check all three names and their intended Production scope; check Preview/Development separately if those environments use the form. Compare values privately against the intended EmailJS account/service/template. Do not put SMTP passwords, EmailJS private keys, or access tokens in any `VITE_` variable: these public values enter the client bundle. [Vite environment documentation](https://vite.dev/guide/env-and-mode.html)

After an authorized configuration change, rebuild/redeploy: Vite embeds client environment values at build time, and Vercel environment changes apply to new deployments. Restart the local dev server after local environment changes. No rebuild deployment or settings change was performed here; the local production build was only a compilation check. [Vercel environment documentation](https://vercel.com/docs/environment-variables)

## Accessibility

**Source-inspected only:** Retained visible associated labels, required text/attributes, email input type, autocomplete, stable field-error IDs, `aria-invalid`, `aria-describedby`, first-invalid-field focus, keyboard order, existing focus styling, and direct email anchors.

The busy marker now applies to the disabled fieldset, leaving sibling live feedback outside the busy subtree. A stable polite status region announces progress/success; a separate stable alert region announces submission/validation failures. Both occupy the existing status paragraph, preserving its layout space. Feedback uses text in addition to color. The submit control is explicitly disabled while pending. Success does not move focus. No motion was added and existing reduced-motion CSS is unchanged.

**Passed through mocked testing:** The lifecycle requests focus on the correct first invalid field and never requests focus on success. Actual DOM focus movement, keyboard navigation, assistive-technology announcements, and focus visibility were not tested in a rendered browser.

## Mocked test results

**Passed through mocked testing:** `npm test` passed **26 tests**, 0 failures. The tests import the real validation/submission helper and inject fake senders; they do not import EmailJS, use production identifiers, or make network requests.

Coverage includes empty/whitespace fields; malformed email; submit-time length boundaries; punctuation/Unicode names; short messages; valid corrections; trimming and internal LF/CRLF preservation; exact parameter mapping; sending state before resolution; duplicate submissions; success-only clearing; failure draft preservation; safe error text; manual recovery; no automatic retries; synchronous SDK failure; late success/rejection after cleanup; cleanup/reactivation; legacy fallback; full overrides; and incomplete configuration blocking.

These are validation and submission-lifecycle tests with mocked form-state/focus callbacks. They do not mount React or constitute browser UI, keyboard, or screen-reader tests. Rendered field error updates, disabled controls, button text, and live-region behavior were reviewed in source only.

## Browser testing

**Source-inspected only:** Browser inventory returned no apps or browser surfaces and reported `Computer Use native pipe is unavailable` / `The system cannot find the file specified. (os error 2)`.

No browser interaction, screenshot, zoom, console, or responsive test was performed. Requested 1440px, 768px, 390px, and 320px checks remain outstanding: horizontal overflow, field usability, error layout, focus visibility, loading layout stability, direct email navigation, bottom-dock overlap, and zoom readability. Existing responsive Contact styling was retained, but that is not visual validation.

## Required command results

| Check | Classification | Result |
| --- | --- | --- |
| `npm test` | Passed through mocked testing | 26 passed, 0 failed |
| `npm run lint` | Verified | Exit 0 |
| `npm run build` | Verified | Exit 0 |
| `git diff --check` | Verified | No whitespace errors; Git line-ending notices only |
| Existing public identifiers retained | Verified | All three preserved; values not printed |
| Environment ignore rules | Verified | Local/mode files ignored; blank example permitted |
| Remote EmailJS/Vercel settings | Pending configuration | No connected settings evidence |
| Inbox receipt and Reply-To | Pending real delivery verification | No real email sent |

The initial sandboxed test run could not start its Node worker due to `EPERM` resolving `C:\Users\Bryan`; the approved run outside the sandbox passed. The production build used the established same filesystem workaround. Build reported the existing outdated Browserslist/caniuse-lite warning; no dependency update was made.

## Manual real-delivery procedure — do not execute without approval

**Pending configuration / pending real delivery verification:**

1. Privately verify Vercel's three public settings and deployment scope, plus the EmailJS service, template variables, intended recipient, Reply-To mapping, allowed origins, and quota. Do not log values or private account information.
2. If configuration changes are needed, obtain authorization before settings changes and deployment; rebuild the Vite app afterward. Do not treat a successful build as a delivery test.
3. Obtain explicit approval for **one** clearly identified test message, including the intended destination and the test sender/contact details. No real submission is authorized by this implementation task.
4. Submit that single message from the intended deployment. Check sending/disabled state and the API response feedback. Do not retry automatically if the outcome is ambiguous.
5. Have the intended recipient confirm receipt in the correct inbox; check Spam/Junk if needed. Verify name, sender email, and multiline message content.
6. Inspect Reply-To (and the reply target without sending a reply) to confirm it targets the submitted sender correctly. Any outbound reply requires its own authorization.
7. Review service/delivery errors privately if receipt fails. Record API acceptance, inbox receipt, and Reply-To as separate outcomes. Mark delivery verified only after recipient confirmation.

## Remaining risks and recommendations

Client validation, input limits, and the in-flight guard are usability protections, not server-side spam prevention. EmailJS documents rate limiting and dashboard origin allowlisting; whether these protections are configured for this account remains pending. Review the intended domains privately in the dashboard. No CAPTCHA, honeypot, arbitrary throttle, or security dependency was added. [EmailJS abuse-prevention overview](https://www.emailjs.com/docs/faq/does-emailjs-expose-my-account-to-spam/), [domain allowlist documentation](https://www.emailjs.com/docs/faq/can-i-add-my-domain-to-allowlist/)

An unresolved SDK request remains in sending state until it settles; there is no timeout that could misleadingly permit a duplicate send while the first request may still be delivered. Network errors are handled when rejected. Unmounting suppresses stale UI results but cannot undo a request already accepted by EmailJS. Native browser input behavior, accessibility, and production delivery still require the distinct verification steps above. No overall production-delivery success claim is made.
