import { SOCIAL_MEDIA_LINKS } from "../constants";
export default function SocialLinks() {
  return <ul className="social-links" aria-label="Social profiles">{SOCIAL_MEDIA_LINKS.filter(link => /github\.com|linkedin\.com/.test(link.href)).map(link => {
    const label = link.href.includes("github.com") ? "GitHub" : "LinkedIn";
    return <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}><span aria-hidden="true">{link.icon}</span>{label}<span aria-hidden="true">↗</span></a></li>;
  })}</ul>;
}
