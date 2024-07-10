import React from "react";
import OrangeRectangle from "/images/orangeRectangleHero.png";
import AlejandroPointing from "/images/alejandroImg.png";
import AlejandroNeutral from "/images/alejandroNeutralBg.png";

function HeroSection() {
  return (
    <section className=" px-6 -mt-[95px]">
      <div className="relative container min-h-[90vh] flex flex-col justify-center md:flex-row md:justify-between md:items-center">
        {/* Hero Text */}
        <div className="flex flex-col text-center  gap-4 w-full pt-32 pb-20 md:text-left md:pb-0 md:w-[40%] md:pt-24">
          <img
            className="md:hidden w-full mx-auto max-w-[300px]"
            src={AlejandroNeutral}
            alt=""
          />
          <h2 className="text-3xl font-semibold text-[#FB7878]">
            Frontend Developer
          </h2>
          <h1 className="text-6xl font-bold">Hey! I Am</h1>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FB7878] to-[#FFAF74] text-transparent bg-clip-text inline-block py-4">
            Alejandro Cartagena
          </h1>
          <p className="text-[#9E9E9E] text-2xl">
            A Frontend Developer with a Computer Science degree and track record
            of crafting seamless and user-friendly web applications.
          </p>
          <button className="mx-auto md:mx-0 text-2xl font-semibold mt-4 w-fit orange text-white px-4 py-2 rounded-md hover:bg-[#FFEFD7] hover:text-[#FFAF74]">
            View Portfolio
          </button>
        </div>
        {/* Hero Image */}
        <div className="">
          <img
            className="hidden md:flex absolute z-10 max-h-[90vh]  top-0 -right-20"
            src={OrangeRectangle}
            alt=""
          />
          <img
            className="hidden md:flex z-20 max-h-[100vh] absolute -right-20 bottom-0"
            src={AlejandroPointing}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
