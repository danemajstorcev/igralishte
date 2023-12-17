import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ProductsContext } from "../../context/ProductsContext";
import "./HamburgerMenu.scss";

interface HamburgerMenuProps {
  onCloseMenu: () => void;
}

const HamburgerMenu = ({ onCloseMenu }: HamburgerMenuProps) => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const { brands, products, loading } = useContext(ProductsContext);
  const [isVisible, setIsVisible] = useState(false);

  const [showVintageMenu, setShowVintageMenu] = useState(false);
  const [showBrandsMenu, setShowBrandsMenu] = useState(false);
  const [showAccessoriesMenu, setShowAccessoriesMenu] = useState(false);

  const handleLinkClick = () => {
    setIsVisible(false);
    onCloseMenu();
  };

  const handleNewClick = () => {
    navigate(`/product-cards?tags=ново`);
    handleLinkClick();
  };

  const handleVintageClick = () => {
    setShowVintageMenu(!showVintageMenu);
    setShowBrandsMenu(false);
    setShowAccessoriesMenu(false);
  };

  const handleSeeAllVintage = () => {
    navigate("/product-cards?type=vintage");
    handleLinkClick();
  };

  const handleBrandsClick = () => {
    setShowBrandsMenu((prevState) => !prevState);
    setShowVintageMenu(false);
    setShowAccessoriesMenu(false);
  };

  const handleAccessoriesClick = () => {
    setShowAccessoriesMenu(!showAccessoriesMenu);
    setShowVintageMenu(false);
    setShowBrandsMenu(false);
  };
  const handleSeeAllAccessories = () => {
    navigate("/product-cards?type=accessories");
    handleLinkClick();
  };
  const handleCategoryClick = (category: string) => {
    navigate(`/product-cards?category=${category}`);
    handleLinkClick();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    onCloseMenu();
  };

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);
  return (
    <div
      className={`hamburger-menu-wrapper ${isVisible ? "visible" : "hidden"}`}
    >
      <div className="hamburger-menu-content">
        <ul className="main-list">
          <li className="new" onClick={handleNewClick}>
            Ново
          </li>
          <li onClick={handleVintageClick}>
            Vintage облека{" "}
            <img
              src="/pictures/material-symbols_arrow-back-ios-rounded.png"
              alt=""
            />
          </li>
          {showVintageMenu && products && !loading && (
            <ul className="dropdown-menu">
              <li className="see-all" onClick={handleSeeAllVintage}>
                Види ги сите
              </li>
              {products.slice(0, 6).map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleCategoryClick(product.category)}
                >
                  {product.category}
                </li>
              ))}
            </ul>
          )}
          <li onClick={handleBrandsClick}>
            Брендови{" "}
            <img
              src="/pictures/material-symbols_arrow-back-ios-rounded.png"
              alt=""
            />
          </li>
          {showBrandsMenu && brands && !loading && (
            <ul className="dropdown-menu">
              <li className="see-all">Види ги сите</li>
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  className="brand-link"
                  to={`/brand/${brand.id}`}
                  onClick={handleLinkClick}
                >
                  <li>{brand.name}</li>
                </Link>
              ))}
            </ul>
          )}
          <li onClick={handleAccessoriesClick}>
            Аксесоари{" "}
            <img
              src="/pictures/material-symbols_arrow-back-ios-rounded.png"
              alt=""
            />
          </li>
          {showAccessoriesMenu && products && !loading && (
            <ul className="dropdown-menu">
              <li className="see-all" onClick={handleSeeAllAccessories}>
                Види ги сите
              </li>
              {products.slice(6, 8).map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleCategoryClick(product.category)}
                >
                  {product.category}
                </li>
              ))}
            </ul>
          )}
          <li>Lifestyle</li>
          <Link
            className="gift-card-link"
            to="gift-cards"
            onClick={handleLinkClick}
          >
            <li>Подари картичка*</li>
          </Link>
          <li className="on-sale">Попуст</li>
        </ul>
        <ul className="icons-list">
          <Link
            className="bottom-link"
            to="/favorites-page?active=cart"
            onClick={handleLinkClick}
          >
            <li>
              <img className="cart" src="/pictures/cart.png" alt="" />
              <span>Кошничка</span>
            </li>
          </Link>
          <Link
            className="bottom-link"
            to="/favorites-page?active=favorites"
            onClick={handleLinkClick}
          >
            <li>
              <img src="/pictures/ph_heart-straight-thin.png" alt="" />
              <span>Омилени</span>
            </li>
          </Link>
          <li>
            {!user ? (
              <Link
                className="bottom-link"
                to="/log-in"
                onClick={handleLinkClick}
              >
                <img src="/pictures/ph_user-light.png" alt="" />
                <span>Регистрирај се/Логирај се</span>
              </Link>
            ) : (
              <Link
                className="bottom-link"
                to="/my-profile"
                onClick={handleLinkClick}
              >
                <img src="/pictures/ph_user-light.png" alt="" />
                <span>Мој профил</span>
              </Link>
            )}
          </li>
          <li>
            {user && (
              <button className="logout-button" onClick={handleLogout}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/46-512.png"
                  alt=""
                />
                <span>Одјави се</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
