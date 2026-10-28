import PropTypes from "prop-types";
import { useState } from "react";

// Presentation metadata describes the inspected assets, not project content.
const PRESENTATIONS = {
  "lunar-ledger": { variant: "dashboard", width: 2543, height: 1317, description: "finance planner with income, payables, and monthly distribution panels" },
  "dobu-martial-arts": { variant: "browser", width: 2544, height: 1309, description: "homepage with monochrome martial arts photography and class navigation" },
  "meals-on-wheels": { variant: "browser", width: 1863, height: 1011, description: "homepage with colorful meal photography and donation action" },
  bryanos: { variant: "desktop", width: 2554, height: 1325, description: "activation screen with system status panels and a geometric digital core" },
};

export default function ProjectMedia({ project, variant }) {
  const [failedImage, setFailedImage] = useState(null);
  const presentation = PRESENTATIONS[project.id];
  const displayVariant = variant || presentation?.variant || "browser";
  const useScreenshot = project.image && failedImage !== project.image && displayVariant !== "placeholder";

  if (!useScreenshot) {
    return <div className="project-media project-placeholder"><span className="placeholder-mark" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}<span> /</span></span><strong>{project.title}</strong><span className="placeholder-note">Screenshot to come</span></div>;
  }

  return (
    <div className={`project-media project-showcase project-showcase--${displayVariant}`}>
      <div className="preview-frame">
        <div className="preview-chrome" aria-hidden="true"><span /><span /><span /></div>
        <div className="preview-screen">
          <img
            src={project.image}
            alt={`${project.title} screenshot${presentation ? `: ${presentation.description}` : ""}`}
            width={presentation?.width}
            height={presentation?.height}
            loading="lazy"
            decoding="async"
            onError={() => setFailedImage(project.image)}
          />
        </div>
      </div>
    </div>
  );
}

ProjectMedia.propTypes = {
  project: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["browser", "dashboard", "desktop", "placeholder"]),
};
