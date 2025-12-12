import React from "react";

import IconButton from "../../ui/IconButton";

const MediaDetails = ({ isOpen = false, closePopup, data }) => {
  return (
    <div
      className={`fixed z-9999 inset-0 bg-overlay-black-60  items-center justify-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <article className="h-[90vh] w-[60vw] max-w-[850px] rounded-sm bg-neutral-gray-850">
        <IconButton onClick={closePopup}></IconButton>
        <p>data.title</p>
      </article>
    </div>
  );
};

export default MediaDetails;
