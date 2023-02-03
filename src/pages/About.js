import { AboutContent, AboutImage } from "../components";
import { motion } from "framer-motion";
import {
  BgMultipleWaves,
} from "../assets";

const About = () => {
  return (
    <motion.main
      className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-14 py-12 smDesk:flex-row-reverse lrgDesk:col-start-4 lrgDesk:col-end-[14] relative"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }}
    >
      <AboutImage/>
      <AboutContent/>
      <BgMultipleWaves className="absolute -bottom-28 -right-28 smTab:-right-16 smDesk:right-1/2 smDesk:-bottom-20 lrgDesk:-bottom-12" />
    </motion.main>
  );
};

export default About;
