import { motion, useReducedMotion } from "framer-motion";
import { SKILL_GROUPS } from "../data/skills";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (delay = 0) => ({
    initial: false,
    whileInView: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.2 },
  });

  return (
    <section
      id="skills"
      className="skills-editorial py-24 sm:py-28 lg:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.header {...motionProps()}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--project-olive-light)]">
            Capabilities
          </p>
          <h2
            id="skills-heading"
            className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[var(--project-gallery-white)] sm:text-6xl lg:text-7xl"
          >
            My Tech Stack.
          </h2>
        </motion.header>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-16 lg:gap-x-14">
          {SKILL_GROUPS.map((group, index) => (
            <motion.article
              key={group.id}
              {...motionProps(index * 0.06)}
              aria-labelledby={`skill-group-${group.id}`}
              className="border-t border-[var(--project-border)] pt-6"
            >
              <p className="font-mono text-xs text-[var(--project-olive-light)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                id={`skill-group-${group.id}`}
                className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[var(--project-gallery-white)]"
              >
                {group.displayTitle}
              </h3>

              <ul
                className="mt-7 space-y-3"
                aria-label={`${group.title} technologies and practices`}
              >
                {group.displayTechnologies.map((technology) => (
                  <li key={technology} className="text-base leading-6 text-[var(--project-text-muted)]">
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
