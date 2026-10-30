import { SKILL_GROUPS } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-editorial py-24 sm:py-28 lg:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <header className="skills-header">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--project-olive-light)]">
              Capabilities
            </p>
            <h2
              id="skills-heading"
              className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[var(--project-gallery-white)] sm:text-6xl lg:text-7xl"
            >
              My Tech Stack<span className="accent">.</span>
            </h2>
          </div>
          <p className="skills-subtitle">The technologies and tools behind my work.</p>
        </header>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <article
              key={group.id}
              aria-labelledby={`skill-group-${group.id}`}
              className="skill-group"
            >
              <h3
                id={`skill-group-${group.id}`}
                className="skill-group-heading"
              >
                <span className="skill-group-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")} /
                </span>
                {group.title}
              </h3>

              <ul
                className="skill-tags"
                aria-labelledby={`skill-group-${group.id}`}
              >
                {group.displayTechnologies.map((technology) => (
                  <li key={technology} className="tech-tag">
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
