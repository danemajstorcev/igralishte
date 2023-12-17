import { Link } from "react-router-dom";
import SparksHeading from "../SparksHeading/SparksHeading";
import scrollToTop from "../../utils/ScrollToTop";
import "./SuccessModal.scss";

interface SuccessModalProps {
  handleSuccessModalClose: () => void;
}

const SuccessModal = ({ handleSuccessModalClose }: SuccessModalProps) => {
  return (
    <div className="success-modal-wrapper">
      <div className="success-modal-main-container">
        <SparksHeading
          textHeading="Вашата нарачка е успешна!"
          className="success-modal"
        />
        <div className="success-text">
          Очекувајте потврда за вашата нарачка на вашата емаил адреса. Keep on
          shining *
        </div>
        <button className="continue-btn" onClick={handleSuccessModalClose}>
          Продолжи
        </button>
        <Link to="/" className="home-link" onClick={() => scrollToTop()}>
          Кон почетна
        </Link>{" "}
      </div>
    </div>
  );
};

export default SuccessModal;
