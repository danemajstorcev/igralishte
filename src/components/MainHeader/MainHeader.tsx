import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./MainHeader.scss";

interface MainHeaderProps {
  showSearchBar?: boolean;
  showHamburgerMenu?: boolean;
  handleHamburgerClick: () => void;
  handleSearchIconClick: () => void;
  handleBackButtonClick: () => void;
  handleCloseMenu: () => void;
}
const MainHeader = ({
  showSearchBar,
  showHamburgerMenu,
  handleHamburgerClick,
  handleSearchIconClick,
  handleBackButtonClick,
  handleCloseMenu,
}: MainHeaderProps) => {
  return (
    <div className="main-header">
      <img
        src="/pictures/hamburger.png"
        alt=""
        onClick={handleHamburgerClick}
      />
      <Link to="/" onClick={handleCloseMenu}>
        <img src="/pictures/main-logo.png" alt="" />
      </Link>
      {showSearchBar ? (
        <SearchBar onBackButtonClick={handleBackButtonClick} />
      ) : (
        <img
          src="/pictures/search-icon.png"
          alt=""
          onClick={handleSearchIconClick}
        />
      )}
      {showHamburgerMenu && <HamburgerMenu onCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default MainHeader;
