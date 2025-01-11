/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./Service";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a software engineer with expertise in mobile and web development, I
        specialize in building scalable applications and optimizing systems.
        Proficient in React, NextJs, Tailwind, PHP, JavaScript, and modern
        frameworks, I excel in collaborative environments and am passionate
        about continuous learning and innovation.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <div key={index} className="w-[280px] h-[280px]">
            <ServiceCard
              index={index}
              title={service.title}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
