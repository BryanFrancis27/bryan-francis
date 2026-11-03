# Bryan Encarnacion — Portfolio V3

**I design the feeling. I build the function.**

A personal portfolio showcasing my work as a **Software Developer / UI/UX Designer**. Built as a responsive, single-page experience with a deep-black and amber visual identity, a floating navigation dock, interactive project details, and accessible contact options.

**[View the live portfolio](https://bryan-francis.vercel.app/)** · **[GitHub repository](https://github.com/BryanFrancis27/bryan-francis)**

## About the portfolio

Portfolio V3 is designed to help recruiters, collaborators, and potential clients understand what I build, how I approach design and development, and how to get in touch. Projects appear immediately after the introduction so visitors can explore the work first.

**Page flow:** Home → Selected Work → About → Tech Stack → Contact

## Features

- **Selected Work** — An ongoing flagship application, two professional engineering entries, and an expandable gallery of four supporting projects.
- **Animated project details** — Accessible dialogs for project descriptions, technologies, features, and contributions, with smooth transitions.
- **BryanOS-inspired navigation** — A floating vertical dock on desktop and a bottom dock on smaller screens, with active-section indicators and accessible labels.
- **Shared portrait presentation** — The same circular studio portrait in Home and About, framed by subtle amber glow effects.
- **About Me panels** — Background, professional experience, and résumé details in glass-style dialogs, including résumé preview/download.
- **Concise tech stack** — Frontend, backend, and design tools organized for quick scanning.
- **Contact form** — EmailJS integration, input validation, submission feedback, duplicate-request protection, and direct email/social alternatives.
- **Considered accessibility** — Semantic sections, keyboard-accessible controls, visible focus states, reduced-motion support, and a skip-to-content link.

## Built with

| Area | Technologies |
| --- | --- |
| Frontend | React 18, JavaScript (JSX), Vite 5 |
| Styling | Tailwind CSS 3, custom CSS |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons / Font Awesome |
| Contact | EmailJS (`@emailjs/browser`) |
| Testing & quality | Node.js built-in test runner, ESLint |
| Deployment | Vercel |

**Design palette:** Deep Black `#070708` · Amber `#F59E0B` · Soft White `#F5F5F5`

## Selected Work

1. **Flagship Personal Project:** AutoCare+ — an ongoing full-stack vehicle maintenance application.
2. **Professional Work:** Conversational Marketing AI Application (ClaaS2SaaS Pte. Ltd.) and AI-Powered SaaS Product Engineering (Vision2Creation), highlighting collaborative engineering contributions.
3. **More Projects:** LunarLedger, DoBu Martial Arts, Meals on Wheels, and BryanOS. The gallery starts collapsed and opens with the minimal **Explore more** toggle.

All seven project records are included in development and production builds. Content is maintained in [`src/data/projects.js`](src/data/projects.js) and [`src/data/professional-projects.js`](src/data/professional-projects.js). Professional work uses high-level descriptions without confidential product identities, screenshots, or employer-owned project links. AutoCare+ retains an intentional screenshot placeholder.

## Getting started

### Prerequisites

- Node.js and npm (Node.js **24.x** is recommended for alignment with current Vercel deployment requirements).
- Git.

### Run locally

```bash
git clone https://github.com/BryanFrancis27/bryan-francis.git
cd bryan-francis
npm ci
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check JavaScript and JSX with ESLint. |
| `npm test` | Run automated Contact form validation and submission-lifecycle tests. |

> The automated tests focus on the Contact form helper. They do not replace browser, accessibility, or real email-delivery testing.

## EmailJS configuration

The Contact form uses EmailJS from the browser. To supply your own EmailJS service, template, and public key, create a `.env.local` file containing **all three** values:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

A blank template is available in [`.env.example`](.env.example). The application also retains its existing public EmailJS identifier fallback; partially configured overrides are rejected rather than combined with those values.

**Important:** Vite exposes `VITE_` variables to browser code. Never store private API keys, SMTP passwords, or access tokens in these variables. Verify the EmailJS template's `name`, `email`, and `message` mappings, the recipient, Reply-To settings, and allowed origins before using the form in production. Successful API submission does not, by itself, confirm inbox delivery.

## Project structure

```text
src/
├── assets/                 # Portfolio images and graphics
├── components/             # Sections, navigation, cards, and dialogs
├── constants/              # Site metadata and navigation links
├── data/                   # Project and skill content
├── lib/contact-form.js     # Contact validation and submission logic
├── App.jsx                 # Single-page section composition
└── index.css               # Global styles and theme tokens
public/
└── resume/                 # Publicly downloadable résumé
tests/
└── contact-form.test.js    # Contact form unit tests
```

## Deployment

The portfolio is deployed on **Vercel** from the `main` branch.

For a new Vercel project, import the repository and use the **Vite** framework preset with:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node.js version:** `24.x` where required by Vercel

If using EmailJS environment overrides, add all three `VITE_EMAILJS_*` values to the relevant Vercel environment and redeploy so Vite can include them at build time.

## Contact

Have a project, opportunity, or question? Reach out through the **[live contact section](https://bryan-francis.vercel.app/#contact)** or connect on **[GitHub](https://github.com/BryanFrancis27)** and **[LinkedIn](https://www.linkedin.com/in/bryan-francis-encarnacion-997126304/)**.

---

Built and maintained by **Bryan Francis O. Encarnacion**.
