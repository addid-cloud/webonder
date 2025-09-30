import Image from "next/image";
import Link from "next/link";
import React from "react";

const navbarLinks = [
  {
    href: "#",
    title: "Home",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#event",
    title: "Event",
  },
  {
    href: "#project",
    title: "Project",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 flex justify-between px-11 py-4">
      <div className="flex-center">
        <Image
          alt="Logo"
          src={"/logo.svg"}
          width={50}
          height={50}
          className="mr-3.5"
        />
        <h4 className="text-2xl font-semibold">Weboender</h4>
      </div>
      <div className="flex items-center gap-12 font-[400]">
        {navbarLinks.map((item) => (
          <Link href={item.href} key={item.href} className="">
            {item.title}
          </Link>
        ))}
      </div>
      <button className="bg-brandBlue-600 text-white rounded-full px-9 font-[400] cursor-pointer">
        Join Us
      </button>
    </nav>
  );
};

export default Navbar;
