import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      
      <div className="flex flex-wrap justify-center py-8 relative">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              zIndex: 10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`relative transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-50"
                : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card 
              image={project.image} 
              title={project.title} 
              subtitle={project.subtitle}
              link={project.link}
            />
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-80 bg-black text-white p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.details}</p>
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
                >
                  View Source Code
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
