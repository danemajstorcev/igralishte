import React, { useState } from "react";
import "./PinkButton.scss";

interface PinkButtonProps {
  pinkButtonText: string;
  pinkButtonStyle?: React.CSSProperties;
}

const PinkButton = ({ pinkButtonText, pinkButtonStyle }: PinkButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
      style={pinkButtonStyle}
      className={`pink-button ${isHovered ? "hovered" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {isClicked ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-arround",
            }}
          >
            {" "}
            <img src="pictures/Vector-golden.png" alt="" />
            <span style={{ fontSize: "28px" }}>Додадено</span>
            <img src="pictures/Vector-golden-small.png" alt="" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              letterSpacing: "2px",
            }}
          >
            <span>кон кошничката</span>
            <img src="pictures/arrow.png" style={{ width: "20px" }} alt="" />
          </div>
        </div>
      ) : isHovered ? (
        "Додај во кошничка"
      ) : (
        pinkButtonText
      )}
    </button>
  );
};

export default PinkButton;
