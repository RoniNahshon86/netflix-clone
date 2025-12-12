import Button from "./Button";

import PlayIcon from "../../assets/icons/Play.svg?react";

const PlayBtn = ({ size = "lg" }) => {
  return (
    <>
      <Button size={size} variant="white">
        <PlayIcon className="h-4" />
        <span>Play</span>
      </Button>
    </>
  );
};

export default PlayBtn;
