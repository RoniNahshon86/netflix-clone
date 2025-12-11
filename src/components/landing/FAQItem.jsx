import React from "react";
import CrossIcon from "../../assets/icons/Cross.svg?react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-neutral-gray-700 mb-2 p-5 w-full">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-primary-white cursor-pointer"
      >
        <h3 className="title2">{question}</h3>
        <CrossIcon
          className={`
            w-6 h-6 transition-transform duration-500 
            ${isOpen ? "rotate-0" : "rotate-45"}
          `}
        />
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${
            isOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"
          }
        `}
      >
        <p className="text-primary-white">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
