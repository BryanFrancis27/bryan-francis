import { SKILLS } from "../constants";
import SkillBar from "../components/SkillBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Skills = () => {
  const softSkills = [
    { name: "Time Management", description: "Effectively managing time to increase productivity." },
    { name: "Communication", description: "Clearly conveying information and ideas." },
    { name: "Adaptability", description: "Adjusting to new conditions and environments." },
    { name: "Problem-Solving", description: "Finding solutions to complex issues." },
    { name: "Creativity", description: "Thinking outside the box to generate innovative ideas." }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto px-4" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 mt-20 text-center text-5xl font-semibold text-white"
      >
        Skills
      </motion.h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 rounded-lg shadow-lg"
          >
            <h3 className="text-center text-4xl font-semibold text-white mb-8">
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
        className="mt-12 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 rounded-lg shadow-lg"
      >
        <h3 className="text-center text-4xl font-semibold text-white mb-8">Soft Skills</h3>
        <Slider {...sliderSettings}>
          {softSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group text-center"
            >
              <h4 className="text-2xl font-semibold text-yellow-300">{skill.name}</h4>
              <p className="mt-2 inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white text-lg p-2 rounded-lg">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Skills;
