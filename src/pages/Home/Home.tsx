import { Link } from "react-router-dom";
import Circle from "../../components/Circle/Circle";
import Carousel from "../../components/Carousel/Carousel";
import scrollToTop from "../../utils/ScrollToTop";
import "./Home.scss";

const Home = () => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="image-and-circle-wrapper">
          <img className="hero-section-pic" src="pictures/coll 1.png" alt="" />{" "}
          <Link to="/product-cards">
            {" "}
            <Circle
              circleHeading="Valentines gal Kолекција"
              circleDescription="Погледни ги свежите љубовни парчиња"
              className="valentines-gal-colection"
            />
          </Link>
        </div>
        <div className="trendy">Trendy парчиња во моментов</div>
      </div>
      <Carousel />
      <div className="second-section">
        <div className="image-and-circle-second-wrapper">
          <img
            className="hero-section-pic"
            src="pictures/IMG_6142 1.png"
            alt=""
          />{" "}
          <Link to="/product-cards?type=accessories" onClick={scrollToTop}>
            <Circle
              circleHeading="Козметика  &  аксесоари"
              circleDescription="Погледни ги свежите љубовни парчиња"
              className="accesorries-and-cosmetics"
            />
          </Link>
        </div>
        <div className="third-section">
          <div className="third-section-image-and-circle-wrapper">
            <img
              className="hero-section-pic"
              src="pictures/ova13 1.png"
              alt=""
            />
            <img className="rotate-star" src="pictures/Group 5.png" alt="" />
            <Link to="/gift-cards" onClick={() => handleClick()}>
              <Circle
                circleHeading="GIFT CARDS"
                circleDescription="Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок."
                className="gift-cards-circle"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
