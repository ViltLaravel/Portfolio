import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const BadgeIcon = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ArrowIcon = ({ color }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CertCard = ({ index, title, issuer, date, credentialUrl, color }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="relative bg-black-100 rounded-2xl p-6 w-full sm:w-[300px] flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300"
    style={{ borderTop: `3px solid ${color}` }}
  >
    <div className="flex items-start justify-between">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${color}22` }}
      >
        <BadgeIcon color={color} />
      </div>
      <span className="text-secondary text-[12px]">{date}</span>
    </div>

    <div className="flex flex-col gap-1 flex-1">
      <h3 className="text-white font-bold text-[16px] leading-snug">{title}</h3>
      <p className="text-secondary text-[13px]">{issuer}</p>
    </div>

    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-lg w-fit transition-all duration-200"
      style={{
        color: color,
        backgroundColor: `${color}15`,
        border: `1px solid ${color}40`,
      }}
    >
      View Credential
      <ArrowIcon color={color} />
    </a>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6">
        {certifications.map((cert, index) => (
          <CertCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
