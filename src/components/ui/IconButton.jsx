import React from "react";

const IconButton = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-8 h-8 bg-neutral-gray-700 flex items-center justify-center border rounded-full cursor-pointer stroke-overlay-white-50"
    >
      {children}
    </div>
  );
};

export default IconButton;
