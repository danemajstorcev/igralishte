import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import Marquee from "../Marquee/Marquee";

const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isSearchMenuVisible, setSearchMenuVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowHamburgerMenu(false);
    setShowSearchBar(false);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  const handleHamburgerClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    setShowSearchBar(false);
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(!showSearchBar);
    setShowHamburgerMenu(false);
    const newOverflow = isSearchMenuVisible ? "visible" : "hidden";
    document.body.style.overflow = newOverflow;
    window.history.replaceState({}, document.title, location.pathname);
  };

  const handleBackButtonClick = () => {
    setShowSearchBar(false);
    document.body.style.overflow = "visible";
  };

  const handleCloseMenu = () => {
    setShowHamburgerMenu(false);
    setShowSearchBar(false);
  };

  useEffect(() => {
    document.body.style.overflow = showHamburgerMenu ? "hidden" : "auto";
  }, [showHamburgerMenu]);

  return (
    <div className="header">
      <MainHeader
        showSearchBar={showSearchBar}
        showHamburgerMenu={showHamburgerMenu}
        handleHamburgerClick={handleHamburgerClick}
        handleSearchIconClick={handleSearchIconClick}
        handleBackButtonClick={handleBackButtonClick}
        handleCloseMenu={handleCloseMenu}
      />
      {!showHamburgerMenu && !showSearchBar && <Marquee />}
    </div>
  );
};

export default Header;
