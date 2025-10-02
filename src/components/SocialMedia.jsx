import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex text-3xl gap-3 cursor-pointer">
      <FaGithub className="rounded-2xl border-2 border-black border-solid p-1" />
      <FaLinkedin className="rounded-2xl border-2 border-black border-solid p-1" />
      <FaInstagram className="rounded-2xl border-2 border-black border-solid p-1" />
    </div>
  );
};
