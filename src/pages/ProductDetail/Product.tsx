import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrums";
import CarouselWithSmallPictures from "../../components/CarouselWithSmallPictures/CarouselWithSmallPictures";
import FavouritesOrCartContainer from "../../components/FavoritesOrCardContainer/FavouritesOrCartContainer";
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";
import AddToCart from "../../components/AddToCart/AddToCart";
import Size from "../../components/Size/Size";
import Maintenance from "../../components/Maintenance/Maintenance";
import TagsContainer from "../../components/TagsContainer/TagsContainer";
import ExpandingBoxesContainer from "../../components/ExpandingBoxesContainer/ExpandingBoxesContainer";
import ProductList from "../../components/ProductList/ProductList";
import { Product } from "../../types/types";
import "./ProductDetail.scss";

interface CurrentProductProps {
  product: Product;
}
const CurrentProduct = ({ product }: CurrentProductProps) => {
  const [heartActive, setHeartActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const { products } = useContext(ProductsContext);

  const storedFavorites = localStorage.getItem("favorites");
  const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : [];

  const currentProductInFavorites = favorites.find(
    (p: Product) => p.id === product.id
  );
  const currentProductInCart = cart.find((p: Product) => p.id === product.id);

  const tagNames = product.tags || [];

  const breadcrumbs = [
    { path: "/", breadcrumbName: "Почетна" },
    {
      path: `/product-cards?type=${product.type}`,
      breadcrumbName: product?.type,
    },
    {
      path: `/product-cards?category=${product.category}`,
      breadcrumbName: product?.category,
    },
  ];

  const filteredProductsByCategory = products.filter(
    (prod) => prod.category === product.category
  );

  const handleHeartClick = () => {
    setHeartActive(!heartActive);
  };

  const handleCartClick = () => {
    setCartActive(!cartActive);
  };

  useEffect(() => {
    if (!storedFavorites) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    if (!storedCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  useEffect(() => {
    if (currentProductInFavorites) {
      setHeartActive(true);
    } else {
      setHeartActive(false);
    }
    if (currentProductInCart) {
      setCartActive(true);
    } else {
      setCartActive(false);
    }
  }, [product]);

  useEffect(() => {
    if (heartActive && !currentProductInFavorites) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else if (!heartActive) {
      const filteredArray = favorites.filter(
        (fav: Product) => fav.id !== product?.id
      );
      localStorage.setItem("favorites", JSON.stringify(filteredArray));
    }
  }, [heartActive]);

  useEffect(() => {
    if (cartActive && !currentProductInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else if (!cartActive) {
      const filteredArray = cart.filter(
        (fav: Product) => fav.id !== product?.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredArray));
    }
  }, [cartActive]);

  return (
    <div className="product-detail">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="product-detail-header">{product.name}</div>
      <CarouselWithSmallPictures images={product.productImages} />
      <div className="product-detail-description">
        <div className="product-detail-price">{product.price} ден.</div>
        <FavouritesOrCartContainer
          heartActive={heartActive}
          cartActive={cartActive}
          handleHeartClick={handleHeartClick}
          handleCartClick={handleCartClick}
        />
        <div className="product-decription-info">{product.description}</div>
        <QuantityCounter />
        <AddToCart
          heartActive={heartActive}
          cartActive={cartActive}
          handleHeartClick={handleHeartClick}
          handleCartClick={handleCartClick}
        />
        <div className="golden-line"></div>
        <Size sizeProp={product.size} />
        <div className="golden-line"></div>
        <Maintenance
          colorName={product.color}
          colorDesc={product.color}
          materialContain={product.material}
          materialSetUp="Постава: 100 % Полиестер"
          directions={product.maintenance}
        />
        <div className="golden-line"></div>
        <TagsContainer tagNames={tagNames} />
        <ExpandingBoxesContainer />
      </div>
      <ProductList
        productsPerPage={6}
        products={filteredProductsByCategory}
        productListHeader="Други парчиња:"
      />
    </div>
  );
};

export default CurrentProduct;
