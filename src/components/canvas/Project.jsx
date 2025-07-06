/* eslint-disable react/prop-types */
import { github } from "../../assets";

export default function ProjectItem({
  name,
  description,
  tags,
  image,
  source_code_link,
}) {
  return (
    <div
      onClick={() => window.open(source_code_link, "_blank")}
      className="bg-tertiary p-5 cursor-pointer rounded-2xl flex flex-col gap-3 md:w-[350px] w-full"
    >
      <div className="relative w-full h-full md:h-[230px]">
        <img src={image} alt={name} className="rounded-xl h-full" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-lg md:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] h-full min-h-[210px]">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
}
