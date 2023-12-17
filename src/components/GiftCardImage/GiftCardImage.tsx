import React from "react";
import "./GiftCardImage.scss";

interface GiftCardImageProps {
  image: string;
  imageText: string;
  customImageStyle?: React.CSSProperties;
  imageTextStyle?: React.CSSProperties;
}
const GiftCardImage = ({
  image,
  customImageStyle,
  imageText,
  imageTextStyle,
}: GiftCardImageProps) => {
  return (
    <div className="gift-card-image-wrapper" style={customImageStyle}>
      <img src={image} alt="" />
      <div className="image-text" style={imageTextStyle}>
        <span>{imageText}</span>
        <img className="star" src="pictures/star.png" alt="" />
      </div>
    </div>
  );
};

export default GiftCardImage;
