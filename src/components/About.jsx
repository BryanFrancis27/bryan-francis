import { ABOUT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-8 lg:px-16 max-w-7xl" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-semibold text-white mb-10"
      >
        About Me
      </motion.h2>
      
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <motion.div 
          className="w-full lg:w-2/3 text-white mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-4xl font-medium mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {ABOUT.text1}
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.p 
                className="text-lg leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">Name:</span> {ABOUT.name}
              </motion.p>
              <motion.p 
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">Age:</span> {ABOUT.age}
              </motion.p>
              <motion.p 
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">Degree:</span> {ABOUT.degree}
              </motion.p>
            </div>
            <div>
              <motion.p 
                className="text-lg leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">Website:</span> {ABOUT.website}
              </motion.p>
              <motion.p 
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">Email:</span> {ABOUT.email}
              </motion.p>
              <motion.p 
                className="mt-2 text-lg leading-loose"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">LinkedIn:</span> {ABOUT.linkedin}
              </motion.p>
            </div>
          </motion.div>
          
          <motion.p
            className="mt-6 text-lg leading-loose rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {ABOUT.text2}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/3 flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-full max-w-xs h-auto rounded-md shadow-lg object-cover"
          />
          <div className="mt-4 flex space-x-4">
            <a
              href="https://drive.google.com/file/d/191AMt7HXDqNtR21zxZ_dq9fQjwCDM0s3/view?usp=sharing" // Replace YOUR_RESUME_FILE_ID with your resume's file ID
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <motion.button
                className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white py-2 px-6 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-500 hover:scale-105 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
                <span className="ml-2">📄</span>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
