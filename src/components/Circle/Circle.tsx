import { useState } from "react";
import "./Circle.scss";

interface CircleProps {
  circleHeading: string;
  circleDescription: string;
  customCircleStyle?: React.CSSProperties;
  customIsNewStyle?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const Circle = ({
  circleHeading,
  circleDescription,
  customIsNewStyle,
  onClick,
  className,
}: CircleProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCircleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`circle ${isClicked ? "golden-bg" : ""} ${className}`}
      onClick={handleCircleClick}
    >
      <img
        className="sparks-img"
        src="pictures/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
        alt=""
      />
      <div className="is-new" style={customIsNewStyle}>
        <svg
          className="vector-golden"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill={isClicked ? "golden" : "url(#paint0_linear_400_3433)"}
        >
          <path
            d="M21.1704 11.1487C15.8839 11.1487 10.5975 5.86803 10.5854 0.581575V0.562911C10.5854 0.565782 10.5852 0.569064 10.5852 0.571935C10.5852 0.568653 10.585 0.565782 10.585 0.5625V0.58096C10.5725 5.86794 5.28646 11.1486 0 11.1486C5.29276 11.1486 10.5855 16.4414 10.5855 21.7341C10.5855 16.4414 15.8783 11.1486 21.171 11.1486L21.1704 11.1487Z"
            fill={isClicked ? "red" : "url(#paint0_linear_400_3433)"}
          />
        </svg>

        <div className="red-new">Ново</div>
        <svg
          className="vector-golden-small"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill={isClicked ? "red" : "gold"}
        >
          <path
            d="M9.18303 2.25069C7.04756 3.65731 3.50701 2.93081 2.0955 0.798553L2.09054 0.791014C2.0913 0.792173 2.09209 0.793554 2.09286 0.794713C2.09198 0.793388 2.09114 0.792283 2.09026 0.790957L2.09517 0.798414C3.49689 2.93742 2.76668 6.47706 0.631219 7.88369C2.76923 6.47539 6.31554 7.20509 7.72385 9.34311C6.31554 7.20509 7.04525 3.65878 9.18326 2.25048L9.18303 2.25069Z"
            fill={isClicked ? "red" : "url(#paint0_linear_400_3437)"}
          />
        </svg>
      </div>
      <div className="circle-heading">{circleHeading}</div>
      <div className="circle-description">{circleDescription}</div>
      <img className="arrow" src="pictures/arrow.png" alt="" />
    </div>
  );
};

export default Circle;
