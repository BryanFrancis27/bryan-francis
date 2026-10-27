import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { ArrowUpRight, Download, X } from "lucide-react";

const resumeUrl = `${import.meta.env.BASE_URL}resume/Bryan_Francis_Encarnacion_Resume.pdf`;
const titles = { background: "Educational Background", experience: "Professional Experience", resume: "My Resume" };

// Grounded in ENCARNACION - RESUME (ATS).pdf; independent of the main Education section.
const experience = [
  {
    company: "Vision2Creation",
    role: "Software Engineer (Contractual)",
    dates: "January 2026 – June 2026",
    contributions: [
      "Developed and maintained AI-powered SaaS platforms using React, Next.js, TypeScript, Firebase, and Firestore.",
      "Built reporting, communication, notification, and workflow automation features with real-time data synchronization.",
      "Implemented secure role-based access control and responsive interfaces.",
      "Collaborated on system architecture, database migrations, testing, issue resolution, and production deployment.",
    ],
  },
  {
    company: "ClaaS2SaaS Pte. Ltd. (Singapore)",
    role: "PHP Developer – Technology Developer",
    dates: "November 2024 – December 2025",
    contributions: [
      "Developed and maintained web applications using PHP (Laravel), JavaScript, HTML, CSS, and MySQL.",
      "Worked on frontend and backend functionality, testing, debugging, and deployment.",
      "Contributed to a Conversational Marketing AI application using Laravel and API integrations.",
    ],
  },
];

function BackgroundPanel() {
  return <div className="about-academic">
    <div className="about-academic-date"><strong>2027</strong><span>Expected completion</span></div>
    <div>
      <h3>BS in Information Technology</h3>
      <p className="about-degree-major">Major in Software Engineering</p>
      <p>University of Cebu (Philippines) &amp; EduCLaaS Lithan (Singapore)</p>
      <div className="about-additional-program">
        <p className="eyebrow">Additional academic program</p>
        <h3>Applied Degree in Software Engineering</h3>
        <p className="about-program-status">In Progress</p>
      </div>
    </div>
  </div>;
}

function ExperiencePanel() {
  return <ol className="about-experience">
    {experience.map((job, index) => <li key={job.company}>
      <span className="about-role-number" aria-hidden="true">0{index + 1}</span>
      <article>
        <h3>{job.company}</h3><p className="about-role-title">{job.role}</p>
        <p className="about-role-dates">{job.dates}</p>
        <ul>{job.contributions.map(item => <li key={item}>{item}</li>)}</ul>
      </article>
    </li>)}
  </ol>;
}

function ResumePanel() {
  return <div className="about-resume">
    <h3>Bryan Francis O. Encarnacion</h3>
    <p className="about-resume-title">Software Developer / UI/UX Designer</p>
    <ul className="about-resume-summary">
      <li>Professional experience in SaaS and Laravel application development.</li>
      <li>Frontend technologies including React, Next.js, and TypeScript.</li>
      <li>Backend and cloud technologies including Firebase, Firestore, Laravel, MySQL, and Supabase.</li>
      <li>Software Engineering academic background.</li>
    </ul>
    <div className="about-resume-actions">
      <a className="button button-secondary about-action" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Full Resume <ArrowUpRight size={16} aria-hidden="true" /></a>
      <a className="button button-primary" href={resumeUrl} download="Bryan_Francis_Encarnacion_Resume.pdf">Download Resume <Download size={16} aria-hidden="true" /></a>
    </div>
    <p className="about-preview-note">Use the PDF actions if the inline preview is unavailable on your device.</p>
    <object className="about-resume-preview" data={resumeUrl} type="application/pdf" aria-label="Preview of Bryan Encarnacion's resume">
      <p>PDF preview is not supported in this browser. <a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">View the resume PDF</a></p>
    </object>
  </div>;
}

export default function AboutInfoDialog({ panel, trigger, onClose }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const closing = useRef(false);

  useEffect(() => {
    const element = dialog.current;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousGutter = root.style.scrollbarGutter;
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    element.showModal();
    closeButton.current.focus({ preventScroll: true });
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 180, easing: "ease-out" });
    }
    return () => {
      element.getAnimations().forEach(animation => animation.cancel());
      element.close();
      root.style.overflow = previousOverflow;
      root.style.scrollbarGutter = previousGutter;
      if (trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [trigger]);

  function requestClose() {
    if (closing.current) return;
    closing.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    const animation = dialog.current.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 120, easing: "ease-in", fill: "forwards" });
    animation.onfinish = onClose;
  }

  return createPortal(<dialog ref={dialog} className="about-dialog" aria-labelledby="about-dialog-title" onCancel={event => { event.preventDefault(); requestClose(); }}>
    <header className="about-dialog-header">
      <div><p className="eyebrow">A little more about me</p><h2 id="about-dialog-title">{titles[panel]}</h2></div>
      <button ref={closeButton} type="button" className="about-dialog-close" aria-label={`Close ${titles[panel]}`} onClick={requestClose}><X size={20} aria-hidden="true" /></button>
    </header>
    <div className="about-dialog-content">
      {panel === "background" && <BackgroundPanel />}
      {panel === "experience" && <ExperiencePanel />}
      {panel === "resume" && <ResumePanel />}
    </div>
  </dialog>, document.body);
}

AboutInfoDialog.propTypes = {
  panel: PropTypes.oneOf(["background", "experience", "resume"]).isRequired,
  trigger: PropTypes.shape({ focus: PropTypes.func.isRequired, isConnected: PropTypes.bool }).isRequired,
  onClose: PropTypes.func.isRequired,
};
