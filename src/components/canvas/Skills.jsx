/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Skills({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="bg-tertiary cursor-pointer h-20 w-20 rounded-lg flex justify-center items-center p-2">
        <img src={icon} alt={name} />
      </div>
    </motion.div>
  );
}
