import { SKILLS } from "../constants";
import SkillBar from "../components/SkillBar";
import { motion } from "framer-motion";
import { FaComments, FaBrain, FaClock, FaLightbulb } from "react-icons/fa";

const Skills = () => {
  const softSkills = [
    { name: "Time Management", icon: <FaClock size={28} className="text-white" /> },
    { name: "Communication", icon: <FaComments size={28} className="text-white" /> },
    { name: "Adaptability", icon: <FaLightbulb size={28} className="text-white" /> },
    { name: "Problem-Solving", icon: <FaBrain size={28} className="text-white" /> },
    { name: "Creativity", icon: <FaLightbulb size={28} className="text-white" /> },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring"
        }}
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
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-left text-2xl font-semibold text-white mb-6 pb-2 border-b border-zinc-800">
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
        transition={{ 
          duration: 0.7, 
          delay: 0.3,
          type: "spring"
        }}
        viewport={{ once: true }}
        className="mt-12 px-4 max-w-7xl mx-auto"
      >
        <h3 className="text-left text-2xl font-semibold text-white mb-6 pb-2 border-b border-zinc-800">
          Professional Skills
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6"> 
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
              }}
              className="flex flex-col items-center justify-center p-6 group transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-zinc-800 rounded-full group-hover:bg-zinc-700 transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-white text-center text-sm font-medium group-hover:text-yellow-400 transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;