import React from "react";
import "./GoldenButton.scss";

interface GoldenButtonProps {
  buttonText: string;
  buttonStyle?: React.CSSProperties;
  onClick?: () => void;
}
const GoldenButton = ({
  buttonText,
  buttonStyle,
  onClick,
}: GoldenButtonProps) => {
  return (
    <button
      className="golden-btn"
      type="submit"
      style={buttonStyle}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default GoldenButton;
