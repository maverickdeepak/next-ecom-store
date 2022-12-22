import React from "react";

const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="bg-green-600 text-gray-200 rounded px-4 py-2 my-2 hover:bg-green-800 hover:ease-linear"
    >
      {children}
    </button>
  );
};

export default Button;
