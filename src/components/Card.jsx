import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Card = ({ title, subtitle, description, technologies, image, sourceCodeLink }) => (
  <motion.div
    whileHover={{ 
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
    }}
    className="bg-zinc-900 border border-zinc-800 flex flex-col rounded-xl shadow-2xl overflow-hidden transition-all duration-300 group"
  >
    {/* Image Section with Overlay Effect */}
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 brightness-75 group-hover:brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Content Section */}
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
        <h4 className="text-sm text-gray-400 mb-3">{subtitle}</h4>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 justify-start mt-auto">
        {technologies?.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-md border border-zinc-700 transition-colors group-hover:bg-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string,
};

Card.defaultProps = {
  technologies: [],
  sourceCodeLink: null,
};

export default Card;