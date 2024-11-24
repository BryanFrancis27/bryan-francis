import { SKILLS } from "../constants";
import SkillBar from "../components/SkillBar";
import { motion } from "framer-motion";
import { FaComments, FaBrain, FaClock, FaLightbulb } from "react-icons/fa"; // Example icons


const Skills = () => {
  const softSkills = [
    { name: "Time Management", icon: <FaClock size={32} color="white" /> },
    { name: "Communication", icon: <FaComments size={32} color="white" /> },
    { name: "Adaptability", icon: <FaLightbulb size={32} color="white" /> },
    { name: "Problem-Solving", icon: <FaBrain size={32} color="white" /> },
    { name: "Creativity", icon: <FaLightbulb size={32} color="white" /> },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 mt-20 text-center text-4xl sm:text-5xl font-semibold text-white"
      >
        Skills
      </motion.h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-left text-2xl font-semibold text-white mb-4 border-l-4 pl-4 border-gray-800">
              {category.category}
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <SkillBar
                key={skillIndex}
                name={skill.name}
                experience={skill.experience}
                color={skill.color}
                icon={skill.icon}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Soft Skills Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 px-4 max-w-7xl mx-auto"
      >
        <h3 className="text-left text-2xl font-semibold text-white mb-4 border-l-4 pl-4 border-gray-800">
          Professional Skills
        </h3>
        <div className="flex justify-start gap-6 px-4 lg:px-0"> {/* Adjust alignment */}
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}

              className="bg-gray-900 flex flex-col items-center justify-center w-48 h-48 p-6 rounded-lg shadow-lg" // Fixed width and height for uniformity
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-white text-center text-lg font-semibold">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
