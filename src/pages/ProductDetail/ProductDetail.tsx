import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import CurrentProduct from "./Product";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { products: contextProducts, loading } = useContext(ProductsContext);
  const { id: productId } = useParams();

  if (loading && !contextProducts) {
    return <div>Loading...</div>;
  }

  const product = contextProducts.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <CurrentProduct product={product} />;
};

export default ProductDetail;
