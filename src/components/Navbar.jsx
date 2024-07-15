import React, { useState } from "react";
import logo from "/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const setNavScrollEffect = () => {
    if (window.scrollY >= 95) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", setNavScrollEffect);

  return (
    <header
      className={`sticky top-0 flex items-center py-4  md:px-6 z-50 ease-in duration-200 ${
        menuOpen ? "px-0" : "px-6"
      } ${navScroll ? "light-orange shadow-md" : ""}`}
    >
      {menuOpen && (
        <ul className="md:hidden bg-[#FFF9F2] text-4xl flex flex-col items-center justify-evenly absolute top-0 w-full h-[100vh] mt-0 py-4 font-semibold">
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              href="#hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      )}

      <nav className="sticky top-0 container flex items-center justify-between">
        <div className="flex">
          <a href="#hero">
            <img
              className={`${menuOpen ? "hidden" : "flex"} md:flex`}
              src={logo}
              alt="A.C Initials Logo"
            />
          </a>
        </div>
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <a className="hover:text-[#000]" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-[#000]" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className={`md:hidden absolute right-6 ${menuOpen && "top-6"}`}>
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
