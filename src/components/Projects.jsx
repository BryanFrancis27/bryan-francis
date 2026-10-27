import { useState } from "react";
import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
export default function Projects() {
  const [selected, setSelected] = useState(null);
  return <section id="projects" className="section-wrap section-space" aria-labelledby="projects-heading"><p className="eyebrow">From idea to implementation</p><h2 id="projects-heading">Selected Projects<span className="accent">.</span></h2><p className="section-intro">A collection of interfaces, applications, and the thinking behind them.</p>
    <div className="project-grid" id="project-archive">{PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onSelect={(item, trigger) => setSelected({ project: item, trigger })} />)}</div>
    {selected && <ProjectDetails project={selected.project} trigger={selected.trigger} onClose={() => setSelected(null)} />}</section>;
}
