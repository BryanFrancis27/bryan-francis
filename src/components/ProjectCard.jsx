import PropTypes from "prop-types";
import ProjectMedia from "./ProjectMedia";
export default function ProjectCard({ project, onSelect }) {
  const Heading = project.tier === "flagship" ? "h3" : "h4";
  const technologies = project.tier === "other" ? project.technologies.slice(0, 3) : project.technologies;

  return <article id={`project-${project.slug}`} className={`project-card project-card--${project.tier}`} aria-labelledby={`${project.id}-title`}><ProjectMedia project={project} /><div className="project-card-body">
    {project.category && <div className="project-meta"><span>{project.category}</span>{project.status && <span className="project-status">{project.status}</span>}</div>}
    <Heading id={`${project.id}-title`} className="project-card-title">{project.title}</Heading>
    {project.descriptor && <p className="project-descriptor">{project.descriptor}</p>}
    {project.employer && <p className="project-employer">{project.employer}<span className="project-role">{project.role}</span></p>}
    <p className="project-summary">{project.summary || project.description}</p>
    <ul className="project-tech" aria-label={`${project.title} selected technologies`}>{technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
    <div className="project-actions">
      <button type="button" className="text-link" onClick={event => onSelect(project, event.currentTarget)} aria-label={`View details for ${project.title}`} aria-haspopup="dialog">View Details <span aria-hidden="true">↗</span></button>
      {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live Preview for ${project.title} (opens in a new tab)`}>Live Preview <span aria-hidden="true">↗</span></a>}
    </div>
  </div></article>;
}
ProjectCard.propTypes = { project: PropTypes.object.isRequired, onSelect: PropTypes.func.isRequired };
