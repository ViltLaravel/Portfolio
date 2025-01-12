/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { ProjectItem } from "./canvas";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <div>
      <motion.div
        variants={{
          initial: {
            x: -100,
            opacity: 0,
          },
          animate: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.3,
              duration: 0.8,
              stiffness: 100,
              damping: 20,
            },
          },
        }}
        initial="initial"
        animate={controls}
        exit="initial"
      >
        <p className={`${styles.sectionSubText} `}>My works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div ref={ref} className="w-full flex">
        <motion.p
          variants={{
            initial: {
              x: 100,
              opacity: 0,
            },
            animate: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.3,
                duration: 0.8,
                stiffness: 100,
                damping: 20,
              },
            },
          }}
          initial="initial"
          animate={controls}
          exit="initial"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-5 flex flex-wrap justify-center items-start gap-5 md:gap-4">
        {projects.map((project, index) => (
          <motion.div
            variants={{
              initial: {
                x: 100,
                opacity: 0,
                scale: 1,
              },
              hover: {
                scale: 1.1,
              },
              animate: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: index * 1.2,
                  duration: 1.2,
                  stiffness: 100,
                  damping: 20,
                },
              },
            }}
            initial="initial"
            animate={controls}
            exit="initial"
            whileHover="hover"
            key={index}
            className="p-2"
          >
            <ProjectItem
              name={project.name}
              description={project.description}
              tags={project.tags}
              image={project.image}
              source_code_link={project.source_code_link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
