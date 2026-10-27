import PropTypes from "prop-types";
import ProjectMedia from "./ProjectMedia";
export default function ProjectCard({ project, index, onSelect }) {
  return <article id={`project-${project.slug}`} className="project-card"><ProjectMedia project={project} /><div className="project-card-body">
    <div className="project-meta"><span>PROJECT / {String(index + 1).padStart(2, "0")}</span>{project.featured && <span className="accent">Featured</span>}</div>
    <h3>{project.title}</h3><p className="project-summary">{project.summary || project.description}</p>
    <ul className="project-tech" aria-label={`${project.title} selected technologies`}>{project.technologies.slice(0, 3).map(tech => <li key={tech}>{tech}</li>)}</ul>
    <button type="button" className="text-link" onClick={event => onSelect(project, event.currentTarget)} aria-label={`View details for ${project.title}`} aria-haspopup="dialog">View Details <span aria-hidden="true">↗</span></button>
  </div></article>;
}
ProjectCard.propTypes = { project: PropTypes.object.isRequired, index: PropTypes.number.isRequired, onSelect: PropTypes.func.isRequired };
