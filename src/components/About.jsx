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
        Reliable software engineer delivering efficient web and mobile solutions
        tailored to your needs. Focused on quality, creativity, and timely
        results. Let&apos;s build something great together!
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
