import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import CartAndFavoritesCounter from "../../components/CartAndFavoritesCounter/CartAndFavoritesCounter";
import ProductList from "../../components/ProductList/ProductList";
import PriceCounter from "../../components/PriceCounter/PriceCounter";
import ExpandingBoxesContainer from "../../components/ExpandingBoxesContainer/ExpandingBoxesContainer";
import { Product } from "../../types/types";
import scrollToTop from "../../utils/ScrollToTop";
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const activeValue = searchParams.get("active");

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>("");

  const { products } = useContext(ProductsContext);

  useEffect(() => {
    setActiveTab(activeValue);
  }, [activeValue]);

  const handleDeleteAll = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    scrollToTop();
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const favoritesFromStorage = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
    setFavorites(favoritesFromStorage);
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const cartFromStorage = storedCart ? JSON.parse(storedCart) : [];
    setCart(cartFromStorage);
  }, []);

  return (
    <div className="favorites-and-cart-main-container">
      <CartAndFavoritesCounter
        favoritesCount={favorites.length}
        cartCount={cart.length}
        activeTab={activeTab}
        onCartClick={() => {
          setActiveTab("cart");
          navigate("?active=cart");
        }}
        onFavoritesClick={() => {
          setActiveTab("favorites");
          navigate("?active=favorites");
        }}
      />
      <div className="golden-line"></div>
      {activeTab === "favorites" && (
        <div className="favorites-wrapper">
          {favorites.map((favoriteProduct: Product, index: number) => (
            <Link
              className="favorite-product"
              key={index}
              to={`/product-detail/${favoriteProduct.id}`}
            >
              <img src={favoriteProduct.image} alt={favoriteProduct.name} />
              <div className="product-details">
                <div className="product-name">{favoriteProduct.name}</div>
                <div className="product-price">
                  {favoriteProduct.price} ден.
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {activeTab === "cart" && (
        <div className="cart-products">
          {cart.map((cartProduct: Product, index: number) => (
            <Link
              className="cart-product"
              key={index}
              to={`/product-detail/${cartProduct.id}`}
            >
              <img src={cartProduct.image} alt={cartProduct.name} />
              <div className="product-details">
                <div className="product-name">{cartProduct.name}</div>
                <div className="product-price">{cartProduct.price} ден.</div>
              </div>
            </Link>
          ))}
          <PriceCounter
            cart={cart}
            onDeleteAll={handleDeleteAll}
            setCart={setCart}
          />
          <ExpandingBoxesContainer />
        </div>
      )}
      <ProductList productListHeader="Други парчиња:" products={products} />
    </div>
  );
};

export default FavoritesPage;
