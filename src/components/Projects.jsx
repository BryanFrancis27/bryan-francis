import { PROJECTS } from "../constants";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="mt-20 text-center text-4xl font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-center py-8">
        {PROJECTS.map((project, index) => (
            <div key={index}>
              <Card image={project.image} 
              title={project.title} 
              subtitle={project.subtitle}
              link="#"/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects