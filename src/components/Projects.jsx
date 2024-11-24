import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

const Projects = () => (
  <div id="projects" className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl py-10">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center text-4xl sm:text-5xl font-semibold text-white"
    >
      Projects
    </motion.h2>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"
    >
      {PROJECTS.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          description={project.details}
          technologies={project.technologies}
          image={project.image}
          sourceCodeLink={project.sourceCodeLink}
        />
      ))}
    </motion.div>
  </div>
);

export default Projects;
