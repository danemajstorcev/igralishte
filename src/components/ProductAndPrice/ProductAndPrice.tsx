import "./ProductAndPrice.scss";

interface ProductAndPriceProps {
  name: string;
  price: number;
}
const ProductAndPrice = ({ name, price }: ProductAndPriceProps) => {
  return (
    <div className="product-and-price">
      <div className="product-name">{name}</div>
      <div className="product-price">{price} ден.</div>
    </div>
  );
};

export default ProductAndPrice;
