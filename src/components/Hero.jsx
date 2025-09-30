"use client";
import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa6";
const text = [
  "1 Quick Text About Weboender",
  "2 Quick Text About Weboender",
  "3 Quick Text About Weboender",
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
          <h1 className="text-7xl font-[400]">3 Quick Text About Weboender</h1>
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
        <div className="relative h-16 w-44 bg-white rounded-box1 ">
          <div className="w-full h-fit bg-inherit rounded-box2"></div>
        </div>
        <div className="relative h-24 w-72 bg-white rounded-box3"></div>
      </div>
    </section>
  );
};

export default Hero;
