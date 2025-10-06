"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaCaretRight } from "react-icons/fa6";
const text = [
  {
    number: 1,
    text: "Focus on problem-solving, not just coding.",
  },
  {
    number: 2,
    text: "Learn through sharing and project-based practice.",
  },
  {
    number: 3,
    text: "An open forum for all web enthusiasts at UINMA.",
  },
];
const Hero = () => {
  const [numText, setNumText] = useState(1);
  return (
    <section className="relative max-w-full h-[calc(100vh-140px)] bg-brandBlue-100 mx-10 mt-25 mb-10 rounded-[43px] flex">
      <div className=" flex flex-col justify-center items-center h-full w-max ml-14 mr-16">
        <button
          onClick={() => setNumText(1)}
          className={`btn  ${numText == 1 ? "bg-white" : ""}`}
        >
          1
        </button>
        <span className="h-9 w-[1px] bg-white"></span>
        <button
          onClick={() => setNumText(2)}
          className={`btn  ${numText == 2 ? "bg-white" : ""}`}
        >
          2
        </button>
        <span className="h-9 w-[1px] bg-white"></span>
        <button
          onClick={() => setNumText(3)}
          className={`btn  ${numText == 3 ? "bg-white" : ""}`}
        >
          3
        </button>
      </div>
      <div className="flex flex-col justify-center max-w-[40%]">
        <div className="mb-16">
          <h1 className="text-6xl font-[400]">{text[numText - 1].text}</h1>
        </div>
        <div className="">
          <button className="bg-brandBlue-600 text-white rounded-full px-10 py-4 font-[400] cursor-pointer w-max mr-5">
            Let's Know Us
          </button>
          <button className="bg-brandBlue-600 text-white rounded-full font-[400] cursor-pointer p-5 ">
            <FaCaretRight />
          </button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 flex flex-col items-end">
        <div className="relative h-16 w-44 bg-white rounded-box1 z-[1] ">
          <div className="w-full bg-inherit rounded-box2 z-[1] flex-center h-full">
            <Link
              href={"/"}
              className="flex-center relative z-[2] h-fit font-semibold text-xl"
            >
              <span className="mr-2 block">See More</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="relative h-32 w-80 bg-white rounded-box3 z-[1] flex-center px-2">
          <div className="relative z-[1] flex mr-3">
            <div className="bg-slate-300 w-[60px] h-[60px] rounded-full"></div>
            <div className="bg-slate-300 w-[60px] h-[60px] rounded-full ml-[-30px]"></div>
            <div className="bg-slate-300 w-[60px] h-[60px] rounded-full ml-[-30px]"></div>
          </div>
          <div className="flex-center flex-col  text-justify">
            <h3 className="font-semibold text-xl">Know More</h3>
            <p className="font-semibold text-sm">
              Get the full story about Webonder’s vision and programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
