import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-2 mb-10 lg:p-0 lg:mx-auto lg:w-[1440px] border border-r-0 border-black"
    >
      <div className="uppercase border-r text-3xl border-black md:text-6xl font-extrabold py-3 ps-5 md:py-5 md:ps-10">
        my projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProjectItem
          imgSrc="/images/project_1.jpeg"
          title="project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis."
        />
        <ProjectItem
          imgSrc="/images/project_2.jpeg"
          title="project 2"
          description="Faucibus a pellentesque sit amet porttitor eget dolor morbi. Scelerisque felis imperdiet proin fermentum leo vel orci porta."
        />
        <ProjectItem
          imgSrc="/images/project_3.png"
          title="project 3"
          description="Urna molestie at elementum eu. Nec sagittis aliquam malesuada bibendum arcu vitae."
        />
        <ProjectItem
          imgSrc="/images/project_4.jpeg"
          title="project 4"
          description="Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Quam lacus suspendisse faucibus interdum posuere."
        />
      </div>
    </div>
  );
};

export default Projects;
