import { Product } from "../../types/types";
import scrollToTop from "../../utils/ScrollToTop";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <div className="product-image-container" onClick={handleClick}>
      <img className="product-image" src={product.image} alt="" />
      <div className="image-title">{product.name}</div>
      {product && <div className="product-price">{product.price} ден.</div>}
    </div>
  );
};

export default ProductCard;
