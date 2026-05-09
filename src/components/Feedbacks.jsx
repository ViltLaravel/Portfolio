/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl w-full max-w-[600px] mx-auto">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const goTo = useCallback(
    (index, dir) => {
      setDirection(dir);
      setCurrent((index + total) % total);
    },
    [total]
  );

  const prev = () => goTo(current - 1, -1);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What clients say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <motion.div
          variants={fadeIn("", "spring", 0.3, 0.75)}
          className="relative flex flex-col items-center"
        >
          {/*
            KEY FIX: `layout` on this wrapper tells Framer Motion to
            smoothly animate height whenever the inner card content
            changes size — no fixed height needed.
          */}
          <motion.div
            layout
            className="w-full max-w-[640px] overflow-hidden"
            transition={{ layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <FeedbackCard {...testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white hover:bg-[#4a4a6a] transition-colors"
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-3 bg-white"
                      : "w-3 h-3 bg-secondary opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white hover:bg-[#4a4a6a] transition-colors"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");