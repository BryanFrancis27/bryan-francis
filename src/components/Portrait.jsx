import PropTypes from "prop-types";
import portraitImage from "../assets/Portrait.png";

export default function Portrait({ variant = "hero" }) {
  const isHero = variant === "hero";

  return (
    <div className={`portrait portrait-${variant}`}>
      <div className="portrait-circle">
        <img
          src={portraitImage}
          alt="Portrait of Bryan Encarnacion"
          loading={isHero ? "eager" : "lazy"}
          fetchPriority={isHero ? "high" : "auto"}
        />
      </div>
    </div>
  );
}
Portrait.propTypes = { variant: PropTypes.oneOf(["hero", "about"]) };
