import PropTypes from "prop-types";
import { BookOpen, ExternalLink, Github } from "lucide-react";

const ProjectLinks = ({ project }) => {
  const links = [
    { href: project.liveUrl, label: "Live Preview", icon: ExternalLink },
    { href: project.sourceUrl, label: "Source code", icon: Github },
    { href: project.caseStudyUrl, label: "Case study", icon: BookOpen },
  ].filter((link) => link.href);

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} for ${project.title} (opens in a new tab)`}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--project-gallery-white)] underline decoration-[var(--project-olive)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--project-olive-light)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--project-charcoal)]"
        >
          {label}
          <Icon size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

ProjectLinks.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    liveUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
    caseStudyUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectLinks;
