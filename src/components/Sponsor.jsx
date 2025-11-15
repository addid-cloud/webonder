"use client";
import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Image from "next/image";

const sponsors = [
  "gdgoc",
  "dse",
  "eth0",
  "isc",
  "mamud",
  "ontaki",
  "uinbuntu",
  "alfataa",
  "uinux",
];
const Sponsor = () => {
  return (
    <section id="sponsor" className="grid grid-cols-2 px-11 py-5">
      <div className="">
        <div className="flex-center px-5 py-3 rounded-2xl border w-max ml-10 gap-3 border-slate-300">
          <span>Follow</span>
          <Link href={""} className="rounded-full border border-slate-300 p-2">
            <SlSocialInstagram />
          </Link>
          <Link href={""} className="rounded-full border border-slate-300 p-2">
            <FaLinkedin />
          </Link>
          <Link href={""} className="rounded-full border border-slate-300 p-2">
            <IoLogoGithub />
          </Link>
        </div>
      </div>
      <div className="flex justify-evenly">
        {sponsors.map((item) => (
          <div className="w-[45px] h-[45px]" key={item}>
            <Image
              width={40}
              height={40}
              className="w-full h-full object-cover"
              alt={item}
              src={`/${item}.png`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
