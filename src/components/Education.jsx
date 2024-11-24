import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-4xl" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 mt-20 text-center text-4xl sm:text-5xl font-semibold text-white"
      >
        Education
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-xl sm:text-2xl font-semibold text-yellow-400"
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
            className={`mb-16 flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Left/Right Content */}
            <div className="w-full md:w-2/5 px-4 md:px-6">
              <div className="bg-p-6 transition-transform transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.institution}
                  </h3>
                </div>
                <p className="text-white text-md">{edu.degree}</p>
                <p className="text-teal-400 text-sm mt-2">
                  {edu.location} • {edu.duration}
                </p>
              </div>
            </div>
            
            {/* Timeline Circle */}
            <div className="relative flex md:w-1/5 justify-center items-center">
              <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white z-10"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
