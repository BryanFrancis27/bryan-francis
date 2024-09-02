import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, subtitle, sourceCodeLink }) => {
  return (
    <motion.div
      className="m-4 block max-w-sm overflow-hidden rounded-lg relative group shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img className="w-full" src={image} alt={title} />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
        <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
        <p className="mb-4 text-sm font-medium text-white">{subtitle}</p>

        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300 mt-4"
        >
          View Source Code
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
