import { useRef } from "react";
import "./Player.scss";

type Props = {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};
const Player = ({ setUsername }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    setUsername(inputRef?.current?.value || "random user");
  };

  return (
    // if game over return here
    <div className="player">
      <input
        className="player__input"
        type="text"
        placeholder="username"
        ref={inputRef}
      />
      <button
        type="submit"
        onClick={() => handleClick()}
        className="player__play--btn"
      >
        Play
      </button>
    </div>
  );
};

export default Player;
