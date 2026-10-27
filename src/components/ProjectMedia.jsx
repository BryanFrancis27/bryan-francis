import PropTypes from "prop-types";
export default function ProjectMedia({ project }) {
  const useScreenshot = ["dobu-martial-arts", "meals-on-wheels"].includes(project.id) && project.image;
  return useScreenshot ? <img className="project-media" src={project.image} alt={`${project.title} website screenshot`} loading="lazy" /> : <div className="project-media project-placeholder"><span className="placeholder-mark" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}<span> /</span></span><strong>{project.title}</strong><span className="placeholder-note">Screenshot to come</span></div>;
}
ProjectMedia.propTypes = { project: PropTypes.object.isRequired };
