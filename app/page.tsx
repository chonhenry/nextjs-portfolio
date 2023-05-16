import Image from "next/image";

const imageStyle = {
  objectFit: "cover",
};

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between px-2
                      lg:flex-row lg:p-0 lg:m-auto lg:w-[1440px]"
    >
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

      <div className="border border-black border-t-0 w-full lg:flex-1">
        <div className="bg-light-brown flex flex-col-reverse mb-2 sm:h-52 sm:flex-row">
          <div className="p-5 text-center sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:text-left">
            <p className="uppercase mb-2 text-orange font-bold text-2xl">
              Project 1
            </p>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="relative w-full h-[20rem] sm:h-full sm:w-[20rem] md:w-[30rem]">
            <Image
              fill
              style={imageStyle}
              src="/images/project_1.jpeg"
              alt="project 1"
            />
          </div>
        </div>

        <div className="bg-light-brown flex flex-col-reverse mb-2 sm:h-52 sm:flex-row">
          <div className="p-5 text-center sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:text-left">
            <p className="uppercase mb-2 text-orange font-bold text-2xl">
              Project 2
            </p>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className="relative w-full h-[20rem] sm:h-full sm:w-[20rem] md:w-[30rem]">
            <Image
              fill
              style={imageStyle}
              src="/images/project_2.jpeg"
              alt="project 1"
            />
          </div>
        </div>

        <div
          className="bg-light-brown flex flex-col-reverse
                          sm:h-52 sm:mb-2 sm:flex-row"
        >
          <div className="p-5 text-center sm:flex-1 sm:flex sm:flex-col sm:justify-center sm:text-left">
            <p className="uppercase mb-2 text-orange font-bold text-2xl">
              Project 3
            </p>
            <p className="text-sm sm:text-base">
              Nulla facilisi morbi tempus iaculis urna id volutpat lacus
              laoreet. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className="relative w-full h-[20rem] sm:h-full sm:w-[20rem] md:w-[30rem]">
            <Image
              fill
              style={imageStyle}
              src="/images/project_3.webp"
              alt="project 1"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
