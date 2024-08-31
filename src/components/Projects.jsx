import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => {
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
      
      <div className="flex flex-wrap justify-center py-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card 
              image={project.image} 
              title={project.title} 
              subtitle={project.subtitle}
              link="#"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
