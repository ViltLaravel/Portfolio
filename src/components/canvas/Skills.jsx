/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Skills({ icon, name }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <div className="bg-tertiary h-20 w-20 rounded-lg flex justify-center items-center p-2">
        <img src={icon} alt={name} />
      </div>
    </motion.div>
  );
}
