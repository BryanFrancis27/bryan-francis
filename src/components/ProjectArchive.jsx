import PropTypes from "prop-types";
import Card from "./Card";

const ProjectArchive = ({ projects, startNumber }) => (
  <section
    id="project-archive"
    aria-labelledby="project-archive-heading"
    className="scroll-mt-32 border-t border-[var(--project-border)] pt-16 lg:scroll-mt-36 lg:pt-24"
  >
    <div className="mb-10 grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] sm:items-end">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--project-olive-light)]">
          Archive / {String(startNumber).padStart(2, "0")}
        </p>
        <h3
          id="project-archive-heading"
          className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--project-gallery-white)] sm:text-5xl"
        >
          More Work
        </h3>
      </div>
      <p className="text-sm leading-6 text-[var(--project-text-muted)] sm:text-right">
        Additional projects presented as a compact, scan-friendly archive.
      </p>
    </div>

    <div className="border-b border-[var(--project-border)]">
      {projects.map((project, index) => (
        <Card
          key={project.id}
          project={project}
          number={String(startNumber + index).padStart(2, "0")}
        />
      ))}
    </div>
  </section>
);

ProjectArchive.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  startNumber: PropTypes.number.isRequired,
};

export default ProjectArchive;
