import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";
import scrollToTop from "../../utils/ScrollToTop";
import GoldenButton from "../GoldenButton/GoldenButton";
import "./Footer.scss";

const Footer = () => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-header">Следи ги нашите новости!</div>
        <div className="footer-txt">
          Биди дел од нашиот newsletter и дознавај прва за промоции, попусти и
          нови колекции.
        </div>
        <form className="registration" action="">
          <label id="e-mail" htmlFor="e-mail">
            E-mail адреса:
          </label>
          <input className="e-mail" type="email" />
          <GoldenButton buttonText="Зачлени се!" />
        </form>
        <div className="about-section">
          <ul>
            <Link onClick={handleClick} className="link-style" to="/about-us">
              <li>За нас</li>
            </Link>
            <Link onClick={handleClick} className="link-style" to="/contact">
              <li>Контакт</li>
            </Link>
            <Link className="link-style" to="https://www.google.com/maps">
              <li>Локатор на продавницата</li>
            </Link>
            <Link onClick={handleClick} className="link-style" to="/faq">
              <li>Често поставувани прашања (FAQ)</li>
            </Link>
            <Link onClick={handleClick} className="link-style" to="/log-in">
              <li>Регистрирај се / логирај се</li>
            </Link>
          </ul>
        </div>
        <div className="social-media">
          <div className="follow-us">Следи не на:</div>
          <div className="social-icon">
            <img src="/pictures/instagram.png" alt="" />
            <span>igralishte.sk</span>
          </div>
          <div className="social-icon">
            <img src="/pictures/tiktok.png" alt="" /> <span>igralishte.sk</span>
          </div>
        </div>
        <CopyRight />
      </div>
    </div>
  );
};

export default Footer;
