import Image from "next/image";
import React from "react";
import { SocialMedia } from "./SocialMedia";

const Footer = () => {
  return (
    <section className="flex flex-col w-full pl-[53px] bg-brandBlue-100 pt-[64px] pb-[36px]">
      <div className="flex justify-around">
        <div>
          <div className="flex items-center ">
            <Image
              alt="Logo"
              src={"/logo.svg"}
              width={50}
              height={50}
              className="mr-3.5 "
            />
            <h3 className="font-semibold text-xl">Webonder</h3>
          </div>
          <div className="flex w-[425px] flex-col">
            <h4 className="text-xl mb-3 mt-2">
              Web Developer Community at UIN Maulana Malik Ibrahim Malang
            </h4>
            <h5 className="text-sm ">
              Program Studi Teknik Informatika, Fakultas Sains dan Teknologi UIN
              Maulana Malik Ibrahim Malang
            </h5>
            <div className="mt-3 mb-[96px]">
              <SocialMedia />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Navigate</h1>
          <div className="grid grid-cols-2">
            <a href=""> Home </a>
            <a href=""> About </a>
            <a href=""> Visi Misi </a>
            <a href=""> Divisi </a>
            <a href=""> Event </a>
            <a href=""> Project </a>
            <a href=""> Sumber Belajar </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h6>© 2025 Weboender Community All Rights Reserved</h6>
      </div>
    </section>
  );
};

export default Footer;
