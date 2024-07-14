import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  return (
    <section className="px-6 py-20">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-16 border-t-2 border-2 border-[#FC9329]"></div>
          <p className="font-semibold uppercase tracking-wider text-sm text-[#FC9329]">
            Contact Me
          </p>
          <div className="w-16 border-t-2 border-2 border-[#FC9329]"></div>
        </div>
        <h1 className="text-4xl text-center font-bold">Your Best Candidate</h1>
        <div className="flex flex-col gap-6 justify-between">
          <div className="text-center">
            <h3 className="text-xl text-[#9E9E9E]">Email</h3>
            <p className="text-2xl font-semibold break-all">
              alejandrocartagena68@gmail.com
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-[#9E9E9E]">My Location</h3>
            <p className="text-2xl font-semibold">Miami, Florida</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-[#9E9E9E] mb-2">LinkedIn</h3>
            <FontAwesomeIcon className="h-12" icon={faLinkedin} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
