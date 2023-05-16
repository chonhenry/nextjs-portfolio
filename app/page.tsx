"use client";

import { useState } from "react";
import Image from "next/image";

const imageStyle = {
  objectFit: "cover",
};

enum Project {
  "project_1",
  "project_2",
  "project_3",
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    Project.project_1
  );

  function handleProjectClick(project: Project) {
    setSelectedProject(project);
  }

  return (
    <main
      className=" px-2
                      lg:p-0 lg:m-auto lg:w-[1440px]"
    >
      <div className="flex flex-col lg:flex-row ">
        <div className="border border-black border-t-0 w-full uppercase text-center py-12 px-6 lg:w-1/3">
          <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi, I am Henry. A passionate software developer based in United
            States.
          </p>
          <div
            className="bg-black text-white font-light w-48 sm:w-72 mt-6 mx-auto py-6 cursor-pointer
                      hover:bg-orange transition ease-in-out duration-300"
          >
            Contact
          </div>
        </div>

        <div className="border border-black border-t-0 w-full lg:border-l-0 lg:p-2 lg:flex-1 lg:flex lg:gap-x-2">
          <div
            className={`bg-light-brown flex flex-col-reverse mb-2 sm:h-52 sm:flex-row lg:h-full ${
              selectedProject === Project.project_1 ? "lg:w-8/12" : "lg:w-2/12"
            }`}
          >
            <div className="p-5 text-center sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:text-left lg:hidden">
              <p className="uppercase mb-2 text-orange font-bold text-2xl">
                Project 1
              </p>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div
              className={`relative w-full h-[20rem] sm:h-full sm:w-[20rem] md:w-[30rem] lg:w-full lg:hover:cursor-pointer
              grayscale brightness-90 hover:brightness-100 ${
                selectedProject === Project.project_1 &&
                "grayscale-0 brightness-100"
              }`}
              onClick={() => handleProjectClick(Project.project_1)}
            >
              <Image
                fill
                style={imageStyle}
                src="/images/project_1.jpeg"
                alt="project 1"
              />
            </div>
          </div>

          <div
            className={`bg-light-brown flex flex-col-reverse mb-2 sm:h-52 sm:flex-row lg:h-full ${
              selectedProject === Project.project_2 ? "lg:w-8/12" : "lg:w-2/12"
            }`}
          >
            <div className="p-5 text-center sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:text-left lg:hidden">
              <p className="uppercase mb-2 text-orange font-bold text-2xl">
                Project 2
              </p>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div
              className={`relative w-full h-[20rem] sm:h-full sm:w-[20rem] md:w-[30rem] lg:w-full lg:hover:cursor-pointer
                          grayscale brightness-90 hover:brightness-100 ${
                            selectedProject === Project.project_2 &&
                            "grayscale-0 brightness-100"
                          }`}
              onClick={() => handleProjectClick(Project.project_2)}
            >
              <Image
                fill
                style={imageStyle}
                src="/images/project_2.jpeg"
                alt="project 2"
              />
            </div>
          </div>

          <div
            className={`bg-light-brown flex flex-col-reverse mb-2 sm:h-52 sm:flex-row lg:h-full ${
              selectedProject === Project.project_3 ? "lg:w-8/12" : "lg:w-2/12"
            }`}
          >
            <div className="p-5 text-center sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:text-left lg:hidden">
              <p className="uppercase mb-2 text-orange font-bold text-2xl">
                Project 3
              </p>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div
              className={`relative w-full h-[20rem] sm:h-full sm:w-[20rem] md:w-[30rem] lg:w-full lg:hover:cursor-pointer
              grayscale brightness-90 hover:brightness-100 ${
                selectedProject === Project.project_3 &&
                "grayscale-0 brightness-100"
              }`}
              onClick={() => handleProjectClick(Project.project_3)}
            >
              <Image
                fill
                style={imageStyle}
                src="/images/project_3.webp"
                alt="project 3"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
