import React from "react";
import "./FavouritesOrCart.scss";

interface FavouritesOrCartProps {
  img: string;
  backgroundColor?: React.CSSProperties;
  onClick?: () => void;
}

const FavouritesOrCart = ({
  img,
  backgroundColor,
  onClick,
}: FavouritesOrCartProps) => {
  return (
    <img
      className="favorites-or-cart"
      src={img}
      alt=""
      style={backgroundColor}
      onClick={onClick}
    />
  );
};

export default FavouritesOrCart;
