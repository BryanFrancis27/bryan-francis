import Portrait from "./Portrait";
import { useState } from "react";
import { BriefcaseBusiness, FileText, GraduationCap } from "lucide-react";
import AboutInfoDialog from "./AboutInfoDialog";

const actions = [
  { panel: "background", label: "Background", Icon: GraduationCap },
  { panel: "experience", label: "Experience", Icon: BriefcaseBusiness },
  { panel: "resume", label: "Resume", Icon: FileText },
];

export default function About() {
  const [selection, setSelection] = useState(null);
  return <section id="about" className="section-wrap section-space about-layout" aria-labelledby="about-heading"><Portrait variant="about" /><div>
    <p className="eyebrow">A little</p><h2 id="about-heading">About Me<span className="accent">.</span></h2>
    <p className="about-lead">I build software with both design and development in mind.</p>
    <p>I&apos;m Bryan, a software developer with experience building full-stack web applications and AI-powered SaaS platforms. I work with React, Next.js, TypeScript, and Laravel to create responsive interfaces and the functionality behind them.</p>
    <p>I believe great software should be intuitive as well as functional. My interest in UI/UX drives me to create thoughtful digital experiences, from planning interfaces and designing user interactions to developing and refining applications that are practical, accessible, and easy to use.</p>
    <div className="about-experience-highlight">
      <p className="eyebrow"><BriefcaseBusiness size={16} aria-hidden="true" />Professional Experience</p>
      <p>Built AI-powered SaaS platforms at Vision2Creation and Laravel web applications at ClaaS2SaaS.</p>
    </div>
    <div className="about-actions" aria-label="More about Bryan">
      {actions.map(({ panel, label, Icon }) => <button key={panel} type="button" className="button button-secondary about-action" aria-haspopup="dialog" onClick={event => setSelection({ panel, trigger: event.currentTarget })}>
        <Icon size={16} aria-hidden="true" />{label}
      </button>)}
    </div></div>
    {selection && <AboutInfoDialog panel={selection.panel} trigger={selection.trigger} onClose={() => setSelection(null)} />}
    </section>;
}
