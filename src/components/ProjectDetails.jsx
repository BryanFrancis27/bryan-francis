import { useLayoutEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import PropTypes from "prop-types";
import ProjectMedia from "./ProjectMedia";
import ProjectLinks from "./ProjectLinks";
export default function ProjectDetails({ project, trigger, onClose }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const animation = useRef(null);
  const mounted = useRef(false);
  const closing = useRef(false);
  const finishClose = useRef(onClose);
  const [phase, setPhase] = useState("opening");
  finishClose.current = onClose;

  useLayoutEffect(() => {
    const element = dialog.current;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousGutter = root.style.scrollbarGutter;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    mounted.current = true;
    closing.current = false;
    setPhase(motionPreference.matches ? "open" : "opening");
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    // Establish the starting appearance before native top-layer insertion and paint.
    element.style.opacity = motionPreference.matches ? "1" : "0";
    element.style.transform = motionPreference.matches ? "none" : "translateY(12px) scale(.94)";
    element.classList.toggle("is-opening", !motionPreference.matches);
    element.classList.remove("is-closing");
    element.showModal();
    closeButton.current.focus({ preventScroll: true });
    let openingFrame = 0;
    if (!motionPreference.matches) {
      animation.current = animate(element, { opacity: [0, 1], scale: [.94, 1], y: [12, 0] }, { duration: .3, ease: [.22, 1, .36, 1] });
      // Resolve the actual native backdrop's transparent state before transitioning.
      // This also works in browsers without @starting-style support.
      window.getComputedStyle(element, "::backdrop").backgroundColor;
      openingFrame = window.requestAnimationFrame(() => {
        if (mounted.current && !closing.current) setPhase("open");
      });
    }
    const reduceMotion = () => {
      if (!motionPreference.matches) return;
      window.cancelAnimationFrame(openingFrame);
      animation.current?.stop();
      // Clear in-progress transforms as well as preventing future motion.
      element.style.opacity = "1";
      element.style.transform = "none";
      if (closing.current) finishClose.current();
      else setPhase("open");
    };
    motionPreference.addEventListener("change", reduceMotion);
    return () => {
      mounted.current = false;
      window.cancelAnimationFrame(openingFrame);
      animation.current?.stop();
      motionPreference.removeEventListener("change", reduceMotion);
      element.close();
      root.style.overflow = previousOverflow;
      document.body.style.overflow = previousBodyOverflow;
      root.style.scrollbarGutter = previousGutter;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [trigger]);

  useLayoutEffect(() => {
    if (phase !== "closing" || !closing.current) return;
    // The closing class is committed before starting the matching 200ms exit.
    const exit = animate(dialog.current, { opacity: 0, scale: .97, y: 6 }, { duration: .2, ease: "easeIn" });
    animation.current = exit;
    const completeClose = () => {
      if (mounted.current && animation.current === exit && closing.current) finishClose.current();
    };
    exit.then(completeClose, completeClose);
  }, [phase]);

  function requestClose() {
    if (closing.current) return;
    closing.current = true;
    animation.current?.stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose.current();
      return;
    }
    setPhase("closing");
  }

  return <dialog ref={dialog} className={`project-dialog is-${phase}`} aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); requestClose(); }}>
    <div className="dialog-top"><p className="eyebrow">Project details</p><button ref={closeButton} className="button button-secondary" type="button" autoFocus onClick={requestClose} aria-label="Close project details">Close <span aria-hidden="true">×</span></button></div>
    <div className="project-dialog-content"><h2 id="project-dialog-title">{project.title}</h2><p className="dialog-description">{project.description}</p><ProjectMedia project={project} />
    <h3>Main technologies</h3><ul className="project-tech">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
    {[{ title: "Features", items: project.features }, { title: "Contributions", items: project.contributions }].filter(group => group.items.length).map(group => <div key={group.title}><h3>{group.title}</h3><ul className="detail-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
    <ProjectLinks project={project} /></div></dialog>;
}
ProjectDetails.propTypes = { project: PropTypes.object.isRequired, trigger: PropTypes.shape({ focus: PropTypes.func, isConnected: PropTypes.bool }).isRequired, onClose: PropTypes.func.isRequired };
