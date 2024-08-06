import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="container mx-auto px-4" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 mt-20 text-center text-5xl font-semibold text-white"
      >
        Education
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-2xl font-bold text-yellow-400"
      >
        My Educational Journey
      </motion.p>
      <div className="relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 w-1 bg-gray-300 transform -translate-x-1/2"
        ></motion.div>
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
            className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 rounded-lg shadow-lg relative transition-transform transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-xl font-semibold text-white">{edu.institution} – {edu.location}</h3>
                </div>
                <p className="text-lg text-white">{edu.degree}</p>
                <p className="text-md text-teal-400">{edu.duration}</p>
              </div>
            </div>
            <div className="hidden md:flex w-1/2 items-center justify-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white flex items-center justify-center">
                {index === EDUCATION.length - 1 ? (
                  <span className="text-white text-xl">&#9733;</span>
                ) : (
                  <span className="text-white text-xl">&#x1F393;</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
