import React from "react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineHandshake } from "react-icons/md";

import { Card } from "./Card";

export const Misi = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold mb-4">MISI</h3>
      <div className="flex flex-row text-white mb-40 mt-10  gap-12">
        <Card
          Icon={IoExtensionPuzzleOutline}
          description={
            "Menekankan pemahaman konsep fundamental dan logika problem-solving di atas sekadar kemampuan menghasilkan kode."
          }
          color="bg-brandTomato-300"
        />
        <Card
          Icon={HiOutlineWrenchScrewdriver}
          description={
            "Memberikan wadah pembelajaran melalui program terstruktur seperti sharing session, dan project-based learning."
          }
          color="bg-brandPink-300"
        />
        <Card
          Icon={MdOutlineHandshake}
          description={
            "Menjadi forum yang terbuka bagi seluruh pegiat web khususnya di Teknik Informatika UIN Malang."
          }
          color=" bg-brandPurple-300"
        />
      </div>
    </div>
  );
};
