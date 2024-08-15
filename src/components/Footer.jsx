import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  // Using useInView hook to trigger animations
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time the component comes into view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-8 mt-20"
    >
      <div className="flex items-center justify-center">
        <motion.figure
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={logo} alt="logo" width={200} className="mb-2" />
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '12rem' } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 h-2 bg-yellow-400"
          ></motion.div>
        </motion.figure>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center justify-center gap-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8 text-center text-sm tracking-wide text-gray-400"
      >
        &copy;2024 Bryan Francis O. Encarnacion. All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;