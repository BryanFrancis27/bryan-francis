import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-24 relative" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring"
        }}
        viewport={{ once: true }}
        className="mb-16 text-center text-4xl sm:text-5xl font-semibold text-white"
      >
        Education
      </motion.h2>
      
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-36 bottom-36 w-0.5 bg-zinc-700 hidden sm:block"></div>
      
      <div className="relative space-y-12 sm:space-y-16 max-w-3xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className={`flex flex-col sm:flex-row items-center w-full ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
              <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-zinc-800"></div>
            </div>

            {/* Education Card */}
            <div className={`w-full sm:w-1/2 ${
              index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'
            }`}>
              <div className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {edu.institution}
                  </h3>
                </div>
                <p className="text-md text-gray-300 mb-1">
                  {edu.degree}
                </p>
                <p className="text-teal-400 text-sm">
                  {edu.location} • {edu.duration}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;