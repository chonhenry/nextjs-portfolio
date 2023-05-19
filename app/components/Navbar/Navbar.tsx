"use client";

import { Pacifico } from "next/font/google";
import MenuDropdown from "./MenuDropdown";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="border-black mx-2 border border-t-0 m-0 flex justify-between items-center text-3xl lg:w-[1440px] lg:m-auto lg:p-0">
      <div className={`${pacifico.className} pl-6 cursor-pointer`}>Henry</div>

      {/* <MenuDropdown /> */}

      <div className="lg:flex cursor-pointer text-lg font-light h-full">
        <div
          className="uppercase py-6 px-8 md:px-14 border-l border-black bg-orange font-medium hover:text-white transition duration-300 ease-out hover:ease-in"
          onClick={() => router.push("#projects")}
        >
          Projects
        </div>
      </div>
    </div>
  );
};

export default Navbar;
