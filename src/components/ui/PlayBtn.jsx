import Button from "./Button";

import PlayIcon from "../../assets/icons/Play.svg?react";

const PlayBtn = () => {
  return (
    <>
      <Button size="lg" variant="white">
        <PlayIcon className="h-4" />
        <span>Play</span>
      </Button>
    </>
  );
};

export default PlayBtn;
