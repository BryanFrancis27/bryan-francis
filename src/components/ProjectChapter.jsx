import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";
import ProjectLinks from "./ProjectLinks";

const ProjectMedia = ({ project, number }) => {
  if (project.image) {
    return (
      <figure className="overflow-hidden border border-[var(--project-border)] bg-[var(--project-ink)]">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="aspect-[4/3] h-full w-full object-cover"
        />
      </figure>
    );
  }

  return (
    <div className="relative flex min-h-[22rem] overflow-hidden border border-[var(--project-border)] bg-[var(--project-ink)] p-6 sm:min-h-[28rem] sm:p-10">
      <div
        className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[var(--project-olive)] opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 right-10 h-32 w-32 border border-[var(--project-border)] opacity-70"
        aria-hidden="true"
      />
      <div className="relative z-10 flex w-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--project-text-subtle)]">
          <span>Project / {number}</span>
          <span>Text-first preview</span>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--project-olive-light)]">
            Visual media pending
          </p>
          <p className="max-w-lg text-4xl font-semibold tracking-[-0.04em] text-[var(--project-gallery-white)] sm:text-6xl">
            {project.title}
          </p>
          <div className="mt-7 flex max-w-xl flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className="border border-[var(--project-border)] bg-[var(--project-charcoal)] px-3 py-1.5 text-xs text-[var(--project-text-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectChapter = ({ project, number, reverse = false }) => {
  const shouldReduceMotion = useReducedMotion();
  const details = project.contributions.length > 0 ? project.contributions : project.features;
  const informationOrder = reverse ? "lg:order-2" : "lg:order-1";
  const mediaOrder = reverse ? "lg:order-1" : "lg:order-2";

  return (
    <motion.article
      id={`project-${project.slug}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      viewport={{ once: true, amount: 0.12 }}
      aria-labelledby={`project-${project.slug}-title`}
      className="scroll-mt-32 border-t border-[var(--project-border)] py-16 first:border-t-0 first:pt-0 lg:scroll-mt-36 lg:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12 xl:gap-16">
        <div className={`lg:col-span-2 ${informationOrder}`}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--project-olive-light)]">
            Featured / {number}
          </p>
          <h3
            id={`project-${project.slug}-title`}
            className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[var(--project-gallery-white)] sm:text-5xl"
          >
            {project.title}
          </h3>
          <p className="mt-6 text-base leading-7 text-[var(--project-text-muted)]">
            {project.summary || project.description}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="border border-[var(--project-border)] px-3 py-1.5 text-xs text-[var(--project-text-muted)]"
              >
                {technology}
              </li>
            ))}
          </ul>

          {details.length > 0 && (
            <div className="mt-9 border-l border-[var(--project-olive)] pl-5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-[var(--project-text-subtle)]">
                Selected contributions
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--project-text-muted)]">
                {details.slice(0, 3).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className={`lg:col-span-3 ${mediaOrder}`}>
          <ProjectMedia project={project} number={number} />
        </div>
      </div>
    </motion.article>
  );
};

const projectShape = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  liveUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  caseStudyUrl: PropTypes.string,
};

ProjectMedia.propTypes = {
  project: PropTypes.shape(projectShape).isRequired,
  number: PropTypes.string.isRequired,
};

ProjectChapter.propTypes = {
  project: PropTypes.shape(projectShape).isRequired,
  number: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default ProjectChapter;
