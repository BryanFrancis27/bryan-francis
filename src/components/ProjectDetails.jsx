import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ProjectMedia from "./ProjectMedia";
import ProjectLinks from "./ProjectLinks";
export default function ProjectDetails({ project, trigger, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal(); document.body.style.overflow = "hidden";
    return () => { element.close(); document.body.style.overflow = previousOverflow; trigger?.focus({ preventScroll: true }); };
  }, [trigger]);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }}>
    <div className="dialog-top"><p className="eyebrow">Project details</p><button className="button button-secondary" type="button" autoFocus onClick={onClose} aria-label="Close project details">Close <span aria-hidden="true">×</span></button></div>
    <h2 id="project-dialog-title">{project.title}</h2><p className="dialog-description">{project.description}</p><ProjectMedia project={project} />
    <h3>Main technologies</h3><ul className="project-tech">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
    {[{ title: "Features", items: project.features }, { title: "Contributions", items: project.contributions }].filter(group => group.items.length).map(group => <div key={group.title}><h3>{group.title}</h3><ul className="detail-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
    <ProjectLinks project={project} /></dialog>;
}
ProjectDetails.propTypes = { project: PropTypes.object.isRequired, trigger: PropTypes.shape({ focus: PropTypes.func }).isRequired, onClose: PropTypes.func.isRequired };
