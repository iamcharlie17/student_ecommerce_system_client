import React from "react";

const colors = {
  success: "#7ca942",
  warning: "#f9990a",
  danger: "#f44336",
  info: "#233636",
  primary: "#ec9a20",
  default: "#999999"
};

const Button = ({ children, type = "default" }) => {
  const color = colors[type] || colors.primary;

  return (
    <button
      style={{ backgroundColor: color }}
      className="uppercase py-2 text-white font-semibold w-full my-4 cursor-pointer hover:scale-105 transition-transform"
    >
      {children}
    </button>
  );
};

export default Button;
