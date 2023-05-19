"use client";

import { Pacifico } from "next/font/google";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  function gotToPage(url: string) {
    window.open(url, "_blank");
  }

  return (
    <footer className="w-full h-[120px] text-white bg-black">
      <div className="h-full w-full lg:w-[1440px] mx-auto px-2 lg:px-0 flex flex-col md:flex-row justify-around md:justify-between items-center">
        <div className={`${pacifico.className} text-4xl cursor-pointer`}>
          Henry
        </div>
        <div className="text-2xl w-[150px] md:text-4xl flex justify-between">
          <AiOutlineGithub
            className="cursor-pointer"
            onClick={() => gotToPage("https://github.com/chonhenry")}
          />
          <FaLinkedin
            className="cursor-pointer"
            onClick={() => gotToPage("https://www.linkedin.com/in/chonhenry")}
          />
          <HiOutlineMail
            className="cursor-pointer"
            onClick={() => gotToPage("mailto:chonhenry@outlook.com")}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
