import "./AddToCart.scss";

interface AddToCartProps {
  heartActive: boolean;
  cartActive: boolean;
  handleHeartClick: () => void;
  handleCartClick: () => void;
}

const AddToCart = ({
  heartActive,
  cartActive,
  handleHeartClick,
  handleCartClick,
}: AddToCartProps) => {
  return (
    <div className="add-to-cart-container">
      <button className="add-to-cart-button" onClick={() => handleCartClick()}>
        {cartActive ? "Додадено кон кошничката →" : "Додај во Кошничка"}
      </button>
      <img
        className="heart-icon"
        src={
          heartActive
            ? "/pictures/ph_heart-straight-thin-active.png"
            : "/pictures/ph_heart-straight-thin-favorites.png"
        }
        onClick={() => handleHeartClick()}
        alt="heart icon"
      />
    </div>
  );
};

export default AddToCart;
