import React from "react";

interface SkillsItemProps {
  technologies: string[];
  titulo: string;
}

const ExperienceItem: React.FC<SkillsItemProps> = ({
  technologies,
  titulo
}) => {
  return (
    <li className="mb-12">
      <h1>{titulo}</h1>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
        <div className="z-10 sm:col-span-6">
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
