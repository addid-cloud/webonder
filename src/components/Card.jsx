import React from "react";

export const Card = ({ Icon, label, description }) => {
  return (
    <div className="flex flex-col justify-center items-center py-16 bg-brandPurple-400 w-80 px-6 rounded-lg gap-8 h-[450px]">
      <Icon size={80} className="text-white" />
      <h3 className="text-3xl font-semibold">{label}</h3>
      <h5 className="text-lg w-10/12 text-center">{description}</h5>
    </div>
  );
};
