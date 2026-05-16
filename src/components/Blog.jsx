import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { blogs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const LockIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#aaa6c3"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ComingSoonCard = ({ index, title }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-black-100/40 rounded-2xl p-6 w-full sm:w-[320px] flex flex-col gap-4 border border-dashed border-secondary/25"
  >
    <div className="flex items-center justify-between">
      <span className="text-secondary/50 text-[11px] uppercase tracking-widest font-semibold">
        Coming Soon
      </span>
      <LockIcon />
    </div>
    <h3 className="text-secondary/60 font-semibold text-[16px] leading-snug">
      {title}
    </h3>
  </motion.div>
);

const BlogCard = ({ index, title, excerpt, date, tag, readTime, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-black-100 rounded-2xl p-6 w-full sm:w-[320px] flex flex-col gap-4 border border-[#915EFF]/20 hover:border-[#915EFF]/60 transition-all duration-300 group"
  >
    <div className="flex items-center justify-between">
      <span className="bg-[#915EFF]/20 text-[#c084fc] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        {tag}
      </span>
      <span className="text-secondary text-[12px]">{readTime}</span>
    </div>

    <div className="flex-1">
      <h3 className="text-white font-bold text-[17px] leading-snug group-hover:text-[#c084fc] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-secondary text-[14px] mt-3 leading-relaxed line-clamp-3">
        {excerpt}
      </p>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-[#915EFF]/15">
      <span className="text-secondary text-[12px]">{date}</span>
      <a
        href={link}
        className="text-[#915EFF] text-[13px] font-medium hover:text-[#c084fc] transition-colors flex items-center gap-1"
      >
        Read more
        <ArrowIcon />
      </a>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Thoughts & learnings</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6">
        {blogs.map((blog, index) =>
          blog.comingSoon ? (
            <ComingSoonCard key={blog.id} index={index} title={blog.title} />
          ) : (
            <BlogCard key={blog.id} index={index} {...blog} />
          )
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
