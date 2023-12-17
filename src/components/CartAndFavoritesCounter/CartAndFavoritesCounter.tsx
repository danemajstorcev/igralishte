import "./CartAndFavoritesCounter.scss";

interface CartAndFavoritesCounterProps {
  favoritesCount?: number;
  cartCount?: number;
  activeTab?: string | null;
  onCartClick?: () => void;
  onFavoritesClick?: () => void;
}
const CartAndFavoritesCounter = ({
  favoritesCount,
  cartCount,
  activeTab,
  onCartClick,
  onFavoritesClick,
}: CartAndFavoritesCounterProps) => {
  return (
    <div className="cart-and-favorites-wrapper">
      <div
        className={`cart-counter ${activeTab === "cart" ? "active" : ""}`}
        onClick={onCartClick}
      >
        <img src="pictures/cart-favorites.png" alt="" /> Кошничка ({cartCount})
      </div>
      <div
        className={`favorites-counter ${
          activeTab === "favorites" ? "active" : ""
        }`}
        onClick={onFavoritesClick}
      >
        <img src="pictures/ph_heart-straight-thin.png" alt="" />
        Омилени ({favoritesCount})
      </div>
    </div>
  );
};

export default CartAndFavoritesCounter;
