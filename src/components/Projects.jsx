import { useMemo, useState } from "react";
import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import MoreProjects from "./MoreProjects";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const flagship = PROJECTS.filter(project => project.tier === "flagship");
  const professional = PROJECTS.filter(project => project.tier === "professional");
  const other = useMemo(() => PROJECTS.filter(project => project.tier === "other"), []);

  const renderCard = project => <ProjectCard key={project.id} project={project} onSelect={(item, trigger) => setSelected({ project: item, trigger })} />;

  return (
    <section id="projects" className="section-wrap section-space selected-work" aria-labelledby="projects-heading">
      <p className="eyebrow">From idea to implementation</p>
      <h2 id="projects-heading">Selected Work<span className="accent">.</span></h2>
      <p className="section-intro">Independent projects and professional software engineering contributions.</p>
      <div id="project-archive" className="selected-work-gallery">
        <div className="project-flagship-list">{flagship.map(renderCard)}</div>
        {professional.length > 0 && (
          <section className="project-group" aria-labelledby="professional-work-heading">
            <div className="project-group-heading">
              <h3 id="professional-work-heading">Professional Work</h3>
            </div>
            <div className="project-grid project-grid--professional">{professional.map(renderCard)}</div>
          </section>
        )}
        <MoreProjects projects={other}>{other.map(renderCard)}</MoreProjects>
      </div>
      {selected && <ProjectDetails project={selected.project} trigger={selected.trigger} onClose={() => setSelected(null)} />}
    </section>
  );
}
