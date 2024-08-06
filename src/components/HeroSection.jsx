import { PROFILE } from "../constants";
import HeroPic from "../assets/bryanFrancis1.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-end justify-center" id="hero">
      {/* Background Image with subtle scaling effect */}
      <motion.img
        src={HeroPic}
        alt={PROFILE.name}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Text Container */}
      <motion.div
        className="z-20 mx-4 max-w-3xl pb-20 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-semibold uppercase tracking-wide md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {PROFILE.name}
        </motion.h1>
        <motion.p
          className="pt-2 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {PROFILE.info}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
