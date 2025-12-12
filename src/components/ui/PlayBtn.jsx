import Button from "./Button";
import PlayIcon from "../../assets/icons/Play.svg?react";

const PlayBtn = ({ size = "lg", onClick, disabled }) => {
  return (
    <Button size={size} variant="white" onClick={onClick} disabled={disabled}>
      <PlayIcon className="h-4" />
      <span>Play</span>
    </Button>
  );
};

export default PlayBtn;
