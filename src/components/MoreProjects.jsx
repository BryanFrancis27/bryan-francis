import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

export default function MoreProjects({ projects, children }) {
  const [expanded, setExpanded] = useState(false);
  const [anchorTarget, setAnchorTarget] = useState(null);
  const gallery = useRef(null);

  useEffect(() => {
    function revealLinkedProject() {
      let target;
      try {
        target = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        setAnchorTarget(null);
        return;
      }
      const matchesProject = projects.some(project => target === `project-${project.slug}` || target === `${project.id}-title`);
      setAnchorTarget(matchesProject ? target : null);
      if (matchesProject) setExpanded(true);
    }

    revealLinkedProject();
    window.addEventListener("hashchange", revealLinkedProject);
    return () => window.removeEventListener("hashchange", revealLinkedProject);
  }, [projects]);

  useEffect(() => {
    if (!expanded || !anchorTarget) return;
    const panel = gallery.current;
    let frame = 0;
    let finished = false;
    // Correct native fragment positioning after the previously hidden row has opened.
    // The timeout also covers browsers without grid-transition events and already-open galleries.
    function reachTarget() {
      if (finished) return;
      finished = true;
      frame = window.requestAnimationFrame(() => {
        document.getElementById(anchorTarget)?.scrollIntoView({ behavior: "instant", block: "start" });
        setAnchorTarget(null);
      });
    }
    function finishReveal(event) {
      if (event.target === panel && event.propertyName === "grid-template-rows") reachTarget();
    }
    panel.addEventListener("transitionend", finishReveal);
    const timeout = window.setTimeout(reachTarget, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 500);
    return () => {
      panel.removeEventListener("transitionend", finishReveal);
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [expanded, anchorTarget]);

  function toggleGallery(event) {
    event.currentTarget.focus({ preventScroll: true });
    setAnchorTarget(null);
    setExpanded(value => !value);
  }

  return (
    <section className="project-group more-projects" aria-labelledby="more-projects-heading">
      <div className="more-projects-header">
        <div className="more-projects-copy">
          <div className="more-projects-title"><h3 id="more-projects-heading">More Projects</h3><span className="more-projects-count">{String(projects.length).padStart(2, "0")} Projects</span></div>
          <p>Other applications, websites, and experiments.</p>
        </div>
        <button className="more-projects-toggle" type="button" aria-expanded={expanded} aria-controls="more-projects-gallery" onClick={toggleGallery}>
          {expanded ? "Show less" : "Explore more"}<ChevronDown size={16} aria-hidden="true" focusable="false" />
        </button>
      </div>
      <div ref={gallery} id="more-projects-gallery" className="more-projects-gallery" data-expanded={expanded} data-fragment={Boolean(anchorTarget)} aria-hidden={!expanded} inert={expanded ? undefined : ""}>
        <div className="more-projects-clip"><div className="project-grid more-projects-content">{children}</div></div>
      </div>
    </section>
  );
}

MoreProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, slug: PropTypes.string.isRequired })).isRequired,
  children: PropTypes.node.isRequired,
};
