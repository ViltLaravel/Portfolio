/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

export default function ServiceCard({ index, title, icon }) {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] p-10 flex justify-center items-center flex-col">
          <div className="m-2 h-[100px] w-[100px]">
            <img src={icon} alt="web-development" />
          </div>

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
