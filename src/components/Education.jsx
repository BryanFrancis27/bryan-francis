import { motion, useReducedMotion } from "framer-motion";
import { EDUCATION, EDUCATION_STAGES } from "../data/education";

const EDUCATION_BY_ID = new Map(EDUCATION.map((education) => [education.id, education]));

const Education = () => {
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
      id="education"
      className="education-editorial py-24 sm:py-28 lg:py-32"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.header {...motionProps()} className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--education-olive)]">
            Academic background
          </p>
          <h2
            id="education-heading"
            className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[var(--education-ink)] sm:text-6xl lg:text-7xl"
          >
            Built on a foundation of learning.
          </h2>
        </motion.header>

        <ol className="mt-16 lg:mt-20" aria-label="Academic journey">
          {EDUCATION_STAGES.map((stage, index) => {
            const stageEntries = stage.educationIds
              .map((educationId) => EDUCATION_BY_ID.get(educationId))
              .filter(Boolean);
            const isCurrentStage = stage.id === "current-studies";

            return (
              <motion.li
                key={stage.id}
                {...motionProps(index * 0.08)}
                className="relative pb-16 pl-10 last:pb-0 sm:pl-14 lg:pb-20"
              >
                {index < EDUCATION_STAGES.length - 1 && (
                  <span
                    className="absolute -bottom-1 left-[0.4375rem] top-4 w-px bg-[var(--education-border)]"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-[var(--project-gallery-white)] bg-[var(--education-olive)] ring-1 ring-[var(--education-olive)]"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--education-olive)]">
                      Stage / {stage.number}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[var(--education-ink)] sm:text-3xl">
                      {stage.label}
                    </h3>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--education-muted)]">
                    {stage.period}
                  </p>
                </div>

                <div className={`mt-7 grid gap-5 ${isCurrentStage ? "lg:grid-cols-2" : "grid-cols-1"}`}>
                  {stageEntries.map((education) => (
                    <article
                      key={education.id}
                      aria-labelledby={`education-${education.id}`}
                      className={
                        isCurrentStage
                          ? "bg-[var(--education-surface)] p-6 sm:p-7"
                          : "border-t border-[var(--education-border)] pt-6"
                      }
                    >
                      <h4
                        id={`education-${education.id}`}
                        className="text-xl font-semibold tracking-[-0.02em] text-[var(--education-ink)] sm:text-2xl"
                      >
                        {education.institution}
                      </h4>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--education-muted)] sm:text-base">
                        {education.displayProgram}
                      </p>
                      <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[var(--education-olive)]">
                        {education.location}
                      </p>
                    </article>
                  ))}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Education;
