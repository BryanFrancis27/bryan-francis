import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Card = ({ title, subtitle, description, technologies, image, sourceCodeLink }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-900 flex flex-col items-center justify-between rounded-lg shadow-lg overflow-hidden w-45 h-90"
  >
    {/* Image Section */}
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    {/* Content Section */}
    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <h4 className="text-sm text-gray-400">{subtitle}</h4>
      <p className="text-sm text-gray-300 mt-4">{description}</p>
      {/* Technologies */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {technologies?.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-zinc-900 text-gray-200 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Source Code Link */}
      {sourceCodeLink && (
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mt-4 inline-block transition duration-300 ease-in-out hover:text-yellow-400"
        >
          View Source Code
        </a>
      )}
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
