import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const SkillBar = ({ name, experience, color, icon }) => {
  // Extract numeric value from experience string
  const numericExperience = parseInt(experience, 10);
  const [displayedExperience, setDisplayedExperience] = useState(0);

  // Animation controls for the percentage text
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: experience });
    // Animate the displayed percentage from 0 to the actual experience value
    const interval = setInterval(() => {
      setDisplayedExperience((prev) => {
        if (prev < numericExperience) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return numericExperience;
        }
      });
    }, 15); // Adjust the duration here to change the speed of the number increment

    return () => clearInterval(interval);
  }, [controls, numericExperience, experience]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 text-sm font-medium text-white">{name}</span>
        </div>
        <span className="text-sm font-medium text-white">
          {displayedExperience}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`${color} h-2.5 rounded-full`}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SkillBar;
