import PropTypes from "prop-types";
import ProjectLinks from "./ProjectLinks";

const Card = ({ project, number }) => (
  <article className="grid gap-6 border-t border-[var(--project-border)] py-8 first:border-t-0 md:grid-cols-[3rem_minmax(0,1fr)_minmax(13rem,0.65fr)] md:gap-8">
    <p className="font-mono text-xs text-[var(--project-olive-light)]">{number}</p>

    <div>
      <h4 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--project-gallery-white)]">
        {project.title}
      </h4>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--project-text-muted)]">
        {project.summary || project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology} className="text-xs text-[var(--project-text-subtle)]">
            {technology}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <ProjectLinks project={project} />
      </div>
    </div>

    {project.image ? (
      <figure className="overflow-hidden border border-[var(--project-border)] bg-[var(--project-ink)]">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="aspect-[16/10] h-full w-full object-cover transition duration-300 hover:opacity-90"
        />
      </figure>
    ) : (
      <div className="flex min-h-36 items-end border border-[var(--project-border)] bg-[var(--project-ink)] p-5">
        <div>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-[var(--project-olive-light)]">
            Text-first preview
          </p>
          <p className="mt-2 text-lg font-semibold text-[var(--project-gallery-white)]">
            {project.title}
          </p>
        </div>
      </div>
    )}
  </article>
);

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    liveUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
    caseStudyUrl: PropTypes.string,
  }).isRequired,
  number: PropTypes.string.isRequired,
};

export default Card;
