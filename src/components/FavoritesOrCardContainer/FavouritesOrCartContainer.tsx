import FavouritesOrCart from "../FavoritesOrCard/FavouritesOrCart";
import "./FavouritesOrCartContainer.scss";

interface FavouritesOrCartContainerProps {
  heartActive: boolean;
  cartActive: boolean;
  handleHeartClick: () => void;
  handleCartClick: () => void;
}

const FavouritesOrCartContainer = ({
  heartActive,
  cartActive,
  handleHeartClick,
  handleCartClick,
}: FavouritesOrCartContainerProps) => {
  return (
    <div className="favourites-or-cart-wrapper">
      <FavouritesOrCart
        img={
          heartActive
            ? "/pictures/ph_heart-straight-thin-active.png"
            : "/pictures/ph_heart-straight-thin-favorites.png"
        }
        onClick={handleHeartClick}
      />
      <FavouritesOrCart
        img={
          cartActive
            ? "/pictures/ic_round-check.png"
            : "/pictures/cart-favorites.png"
        }
        backgroundColor={{ backgroundColor: "#FFF6F6" }}
        onClick={handleCartClick}
      />
    </div>
  );
};

export default FavouritesOrCartContainer;
