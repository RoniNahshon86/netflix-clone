import React from "react";

const FeatureBlock = ({ title, description, image, reverse = false }) => {
  return (
    <article className="border-b-4 border-neutral-gray-800 py-20">
      <div
        className={`max-w-[90vw] mx-auto px-4 flex items-center justify-between gap-6 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col flex-1 gap-5">
          <h2 className="title1">{title}</h2>
          <p className="title2">{description}</p>
        </div>
        <div className="flex-1 h-100">
          <img src={image} alt={title} className="object-cover" />
        </div>
      </div>
    </article>
  );
};

export default FeatureBlock;
