import PropTypes from "prop-types";

const ProjectIndex = ({ items, activeId, compact = false }) => (
  <nav
    aria-label={compact ? "Project jump links" : "Project index"}
    className={
      compact
        ? "mt-12 border-y border-[var(--project-border)] py-3 lg:hidden"
        : "sticky top-32 hidden self-start lg:block"
    }
  >
    <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-[var(--project-text-subtle)]">
      Index
    </p>
    <ol className={compact ? "grid gap-1 sm:grid-cols-3 sm:gap-3" : "space-y-2"}>
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`group flex min-h-11 items-center gap-3 border-l-2 px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-charcoal)] ${
                isActive
                  ? "border-[var(--project-olive-light)] text-[var(--project-gallery-white)]"
                  : "border-transparent text-[var(--project-text-muted)] hover:border-[var(--project-olive)] hover:text-[var(--project-gallery-white)]"
              }`}
            >
              <span className="font-mono text-[0.6875rem] text-[var(--project-olive-light)]">
                {item.number}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);

ProjectIndex.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};

export default ProjectIndex;
