/* eslint-disable react-refresh/only-export-components */

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Skills } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex justify-center items-center"
          key={technology.name}
        >
          <Skills icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
