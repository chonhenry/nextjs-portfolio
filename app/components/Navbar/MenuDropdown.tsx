"use client";

import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const MenuDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function handleClick() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="lg:hidden">
      <div className="cursor-pointer" onClick={handleClick}>
        {isMenuOpen ? <RxCross1 /> : <FiMenu />}
      </div>
      {isMenuOpen && (
        <div className="absolute w-screen border border-black mt-20 top-0 right-0 font-thin text-lg cursor-pointer">
          <div className="text-center py-5 border-b border-black hover:tracking-widest">
            Portfolio
          </div>
          <div className="text-center py-5 border-b border-black hover:tracking-widest">
            Service
          </div>
          <div className="text-center py-5 border-b border-black hover:tracking-widest">
            About
          </div>
          <div className="text-center py-5 bg-orange text-white hover:tracking-widest">
            CONTACT
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
