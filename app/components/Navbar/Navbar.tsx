import { Pacifico } from "next/font/google";
import MenuDropdown from "./MenuDropdown";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className="border-black p-5 border-b m-0 flex justify-between items-center text-3xl lg:border lg:border-t-0 lg:w-[1440px] lg:m-auto lg:p-0">
      <div className={`${pacifico.className} lg:pl-6 cursor-pointer`}>
        Henry
      </div>

      <MenuDropdown />

      <div className="hidden lg:flex cursor-pointer text-lg font-light h-full">
        <div
          className="py-6 px-14 border-l border-black hover:bg-black hover:text-white
                          transition duration-300 ease-out hover:ease-in"
        >
          Portfolio
        </div>
        <div
          className="py-6 px-14 border-l border-black hover:bg-black hover:text-white
                          transition duration-300 ease-out hover:ease-in"
        >
          Service
        </div>
        <div
          className="py-6 px-14 border-l border-black hover:bg-black hover:text-white
                          transition duration-300 ease-out hover:ease-in"
        >
          About
        </div>
        <div
          className="py-6 px-14 border-l border-black bg-orange font-medium hover:text-white
                          transition duration-300 ease-out hover:ease-in"
        >
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default Navbar;
