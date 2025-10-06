import React from "react";

export const Card = ({
  Icon,
  label,
  description,
  color = "bg-brandPurple-400",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center py-16 w-80 px-6 rounded-lg gap-8 h-[450px] ${color} shadow-xl`}
    >
      <Icon size={80} className="text-white" />
      <h3 className="text-3xl font-semibold">{label}</h3>
      <h5 className="text-lg w-10/12 text-center">{description}</h5>
    </div>
  );
};
