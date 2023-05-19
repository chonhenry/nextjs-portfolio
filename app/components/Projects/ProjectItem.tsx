import React from "react";
import Image from "next/image";

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

interface ProjectItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="border-t border-r border-black p-5 md:p-10">
      <div className="w-full md:h-[300px] lg:h-[450px]">
        <Image
          className="hover:scale-105 transition-scale duration-200"
          src={imgSrc}
          style={imageStyle}
          width={500}
          height={500}
          alt="project"
        />
      </div>
      <h1 className="uppercase font-bold my-3 text-2xl md:my-5 md:text-4xl text-orange cursor-pointer">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;
