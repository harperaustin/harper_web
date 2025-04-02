import React, { useState } from "react";

interface ScrambleTextButtonProps {
  text: string;
  onClick: () => void;
}

const ScrambleTextButton: React.FC<ScrambleTextButtonProps> = ({
  text,
  onClick,
}) => {
  const [displayText, setDisplayText] = useState(text);

  const scrambleText = (original: string) => {
    const chars = original.split("");
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join("");
  };

  const handleMouseEnter = () => {
    let scrambleInterval = setInterval(() => {
      setDisplayText(scrambleText(text));
    }, 50);

    setTimeout(() => {
      clearInterval(scrambleInterval);
      setDisplayText(text);
    }, 1000); // Scramble for 1 second
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className="scramble-button"
    >
      {displayText}
    </button>
  );
};

export default ScrambleTextButton;
