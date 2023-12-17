import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/types";
import "./Carousel.scss";

const Carousel = () => {
  const { products } = useContext(ProductsContext) as {
    products: Product[] | null;
  };
  const displayedProducts = products || [];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % displayedProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + displayedProducts.length) % displayedProducts.length
    );
  };

  if (displayedProducts.length === 0) {
    return null;
  }

  const productDetailLink = `/product-detail/${displayedProducts[currentSlide].id}`;

  return (
    <div className="carousel">
      <Link to={productDetailLink} className="slide-wrapper active">
        <ProductCard product={displayedProducts[currentSlide]} />
      </Link>
      <div className="carousel-buttons">
        <img
          src="pictures/material-symbols_arrow-back-ios-rounded-left.png"
          alt=""
          onClick={prevSlide}
          className="carousel-button"
        />
        <img
          src="pictures/material-symbols_arrow-back-ios-rounded-right.png"
          alt=""
          onClick={nextSlide}
          className="carousel-button"
        />
      </div>
    </div>
  );
};

export default Carousel;
