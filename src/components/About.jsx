import { ABOUT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time the component comes into view
  });

  return (
    <div className="relative container mx-auto mt-20" id="about">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-semibold text-white mb-10"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-gradient-to-r from-zinc-800 to-zinc-950 rounded-lg p-10 shadow-xl">
        <motion.div
          className="w-full lg:w-2/3 text-white mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-4xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {ABOUT.text1}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-opacity-20 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div>
              <motion.p
                className="text-lg leading-loose"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="font-semibold">Name:</span> {ABOUT.name}
              </motion.p>
              <motion.p
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="font-semibold">Age:</span> {ABOUT.age}
              </motion.p>
              <motion.p
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="font-semibold">Degree:</span> {ABOUT.degree}
              </motion.p>
            </div>
            <div>
              <motion.p
                className="text-lg leading-loose"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="font-semibold">Languages:</span> {ABOUT.languages.join(", ")}
              </motion.p>
              <motion.p
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="font-semibold">Email:</span> {ABOUT.email}
              </motion.p>
              <motion.p
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="font-semibold">Location:</span> {ABOUT.location}
              </motion.p>
            </div>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-loose bg-opacity-20 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {ABOUT.text2}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/3 flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full max-w-xs h-auto rounded-md shadow-lg object-cover"
          />
          <div className="mt-4 flex space-x-4">
            <motion.button
              className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-500 hover:scale-105 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Video Introduction
              <span className="ml-2">▶️</span>
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-500 hover:scale-105 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
              <span className="ml-2">📄</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;