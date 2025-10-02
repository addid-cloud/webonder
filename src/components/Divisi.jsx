import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { Card } from "./Card";

export const Divisi = () => {
  return (
    <section className="flex flex-col bg-brandPurple-600 w-full text-white relative z-0 overflow-hidden">
      <div className="mx-8 md:mx-32 mt-16 mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">Divisi</h2>
        <h5 className="text-base md:text-xl font-semibold mt-2 max-w-3xl mx-auto md:mx-0">
          Webonder Community has 3 internal divisions, organized to enhance
          collaboration and maximize the strengths of our members.
        </h5>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 justify-center items-center mb-24 relative z-10 ">
        <Card
          Icon={IoCodeSlash}
          label="Devspeak"
          description="Innovating Through Code"
        />
        <Card
          Icon={GiPartyPopper}
          label="Event"
          description="Connecting Through Experiences"
        />
        <Card
          Icon={IoCodeSlash}
          label="MedKraf"
          description="Designing and Crafting Digital Media"
        />
      </div>
      <img
        src="./circle-full-right 1.png"
        alt=""
        className="absolute w-1/2 h-1/2  -right-32 -bottom-10 -z-10"
      />
    </section>
  );
};
