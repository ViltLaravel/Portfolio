/* eslint-disable react/prop-types */

export default function ProjectItem({
  name,
  description,
  tools,
  role,
  image,
  source_code_link,
}) {
  return (
    <div
      onClick={() => window.open(source_code_link, "_blank")}
      className="bg-tertiary p-5 cursor-pointer rounded-2xl flex flex-col gap-3 md:w-[350px] w-full"
    >
      <div className="relative w-full h-full md:h-[160px]">
        <img src={image} alt={name} className="rounded-xl h-full" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-lg md:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-justify text-[14px] h-full min-h-[210px]">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-start items-center gap-2">
        Tools Used :
        {tools.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2">
        Role :
        {role.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
}
