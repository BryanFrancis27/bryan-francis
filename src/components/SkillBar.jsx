import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const SkillBar = ({ name, experience, color, icon }) => {
  const numericExperience = parseInt(experience, 10);
  const [displayedExperience, setDisplayedExperience] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: experience });
    const interval = setInterval(() => {
      setDisplayedExperience((prev) => {
        if (prev < numericExperience) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return numericExperience;
        }
      });
    }, 15);

    return () => clearInterval(interval);
  }, [controls, numericExperience, experience]);

  return (
    <motion.div 
      className="mb-4 w-full group"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex justify-between mb-2 items-center">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 flex items-center justify-center bg-zinc-800 rounded-md p-1 group-hover:bg-zinc-700 transition-colors">
            {icon}
          </div>
          <span className="text-sm font-medium text-white truncate max-w-[200px] group-hover:text-yellow-400 transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-medium text-gray-400">
          {displayedExperience}%
        </span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`${color} h-2 rounded-full`}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 50
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SkillBar;