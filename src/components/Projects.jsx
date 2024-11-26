import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl py-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring"
        }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl sm:text-5xl font-semibold text-white"
      >
        Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -100 : 100 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="hover:z-10"
          >
            <Card
              title={project.title}
              subtitle={project.subtitle}
              description={project.details}
              technologies={project.technologies}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;