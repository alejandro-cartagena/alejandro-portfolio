import React from "react";
import { Link } from "react-router-dom";
import alejandroGuitarImg from "/images/alejandroGuitar.png";
import alejandroHikingImg from "/images/alejandroHiking.png";

function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 light-orange">
      <div className="container flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
        {/* Images */}
        <h1 className="flex justify-center md:hidden text-5xl font-bold">
          About Me
        </h1>
        <div className="w-full md:w-[50%] grid grid-cols-6">
          <img
            className="col-start-1 col-span-3 row-start-1 row-span-3 z-20 border-8 border-[#FFF9F2]"
            src={alejandroHikingImg}
            alt=""
          />
          <img
            className="shadow-md col-start-2 col-end-8 row-start-2 row-span-3 z-10 "
            src={alejandroGuitarImg}
            alt=""
          />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-4 w-full md:w-[45%]">
          <div className="flex items-center space-x-2">
            <div className="w-16 border-t-2 border-2 border-[#FC9329]"></div>
            <p className="font-semibold uppercase tracking-wider text-sm text-[#FC9329]">
              My Journey
            </p>
          </div>
          <h1 className="hidden md:flex text-5xl font-bold">About Me</h1>
          <p className="tracking-wide">
            I'm a Frontend Developer located in Miami Florida. My passion for
            code began when I took my first programming class in University. I
            fell in love with creating web applications due to the creative
            aspect of it and the endless possibilites for innovation and problem
            solving. My expertise lies in building intuitive user friendly
            applications using technologies such as React, Node.js, Express,
            PostgreSQL, MongoDB, HTML, CSS, and JavaScript.
          </p>
          <p className="tracking-wide">
            When I'm not coding, I love playing the guitar and going on hikes.
            Getting lost in my playing and challenging myself physically both
            eases my mind and enriches my soul. Music allows me to express my
            creativity in a different medium, while hiking connects me with
            nature and provides a refreshing break from the digital world.
          </p>
          <Link
            to="/#portfolio"
            className="mx-auto md:mx-0 uppercase tracking-wide text-lg font-semibold mt-4 w-fit orange text-white px-4 py-2 rounded ease-in-out duration-200 hover:scale-105 hover:bg-gradient-to-r from-[#FB7878] to-[#FFAF74]"
          >
            My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
