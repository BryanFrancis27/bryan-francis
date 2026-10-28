import { useEffect, useState } from "react";
import { House, CodeXml, Folder, Mail, UserRound } from "lucide-react";
import { NAVIGATION_LINKS } from "../constants";

const icons = { home: House, about: UserRound, skills: CodeXml, projects: Folder, contact: Mail };
const destinations = [{ label: "Home", href: "#home" }, ...NAVIGATION_LINKS];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hideTooltips, setHideTooltips] = useState(false);

  useEffect(() => {
    const sections = destinations.map(link => document.getElementById(link.href.slice(1))).filter(Boolean);
    let frame = 0;
    let currentSection = "home";
    const update = () => {
      frame = 0;
      // A stable reading line handles long sections and gaps without ratio flicker.
      const line = window.innerHeight * .3;
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const nextSection = atBottom ? sections.at(-1).id : sections.filter(section => section.getBoundingClientRect().top <= line).at(-1)?.id || "home";
      if (nextSection !== currentSection) {
        currentSection = nextSection;
        setActive(nextSection);
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("pageshow", schedule);
    const resizeObserver = new ResizeObserver(schedule);
    sections.forEach(section => resizeObserver.observe(section));
    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("pageshow", schedule);
    };
  }, []);

  return <div className="dock-position"><nav aria-label="Main navigation" className={`portfolio-dock${hideTooltips ? " hide-tooltips" : ""}`} style={{ "--active-index": destinations.findIndex(link => link.href === `#${active}`) }} onKeyDown={event => { if (event.key === "Escape") setHideTooltips(true); }}>
    <span className="dock-indicator" aria-hidden="true" />
    <ul className="dock-links">
      {destinations.map(({ label, href }) => {
        const id = href.slice(1);
        const Icon = icons[id];
        return <li key={href}>
          <a className={`dock-link${active === id ? " is-active" : ""}`} href={href} aria-label={label} aria-current={active === id ? "location" : undefined} onFocus={() => setHideTooltips(false)} onPointerEnter={() => setHideTooltips(false)}>
            <Icon size={20} strokeWidth={1.75} aria-hidden="true" focusable="false" />
            <span className="dock-tooltip" aria-hidden="true">{label}</span>
          </a>
        </li>;
      })}
    </ul>
  </nav></div>;
}
