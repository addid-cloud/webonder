import React from "react";

export const Visi = () => {
  return (
    <div className="flex justify-center flex-col items-center text-center px-6 py-10 relative my-32">
      <h1 className="text-4xl font-bold mb-4">VISI</h1>
      <div className="relative">
        <h2 className="w-5xl text-3xl leading-relaxed font-medium">
          Menjadikan{" "}
          <span className="text-red-500 font-semibold">Weboender</span> sebagai
          wadah bagi mahasiswa untuk mengembangkan keahlian di{" "}
          <span className="text-purple-600 font-semibold">bidang web</span>,
          yang berfokus pada{" "}
          <span className="text-red-500 font-semibold">
            pemahaman fundamental{" "}
          </span>
          dan cara kerja di balik sebuah teknologi
        </h2>
        <span className="absolute -left-0 -bottom-40 text-[300px] text-red-300 font-bold -z-10">
          “
        </span>
        <span className="absolute -right-7 -top-10  text-[300px] text-purple-400 font-bold -z-10 ">
          ”
        </span>
      </div>
    </div>
  );
};
