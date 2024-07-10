import React, { useState } from "react";
import logo from "/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative flex items-center py-4 px-6 z-50">
      {menuOpen && (
        <ul className="md:hidden bg-[#FFF9F2] text-4xl flex flex-col items-center justify-evenly absolute top-0 w-full h-[100vh] mt-0 py-4 font-semibold">
          <li>
            <a className="hover:text-[#FC9329]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC9329]" href="#">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC9329]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC9329]" href="#">
              Portfolio
            </a>
          </li>
        </ul>
      )}

      <nav className="container flex items-center justify-between">
        <div className="flex">
          <img src={logo} alt="A.C Initials Logo" />
          {/* <span className="mt-7 text-lg font-semibold tracking-widest">
            artagena
          </span> */}
        </div>
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <a className="hover:text-[#000]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
      <button className="md:hidden absolute right-6">
        {menuOpen ? (
          <FontAwesomeIcon
            onClick={toggleNav}
            className="text-3xl text-[#FC9329]"
            icon={faX}
          />
        ) : (
          <FontAwesomeIcon
            onClick={toggleNav}
            className="text-3xl hover:text-[#FC9329]"
            icon={faBars}
          />
        )}
      </button>
    </header>
  );
}

export default Navbar;
