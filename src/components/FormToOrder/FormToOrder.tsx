import { useEffect, useState } from "react";
import SparksHeading from "../SparksHeading/SparksHeading";
import SuccessModal from "../SuccessModal/SuccessModal";
import { Product } from "../../types/types";
import "./FormToOrder.scss";

interface FormToOrderProps {
  closeModal: () => void;
  setCart: (cart: Product[]) => void;
}

const FormToOrder = ({ closeModal, setCart }: FormToOrderProps) => {
  const [hasUserInLocalStorage, setHasUserInLocalStorage] = useState(false);
  const [fillCheckboxChecked, setFillCheckboxChecked] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    address: "",
    mobile: "",
    email: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData(parsedUser);
      setHasUserInLocalStorage(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFillCheckboxChecked(!fillCheckboxChecked);
  };

  const handleOrderButtonClick = () => {
    setIsSuccessModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    closeModal();
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    document.body.style.overflow = "visible";
  };

  return (
    <div
      className={`form-to-order-main-container ${
        isSuccessModalOpen ? "modal-open" : ""
      }`}
    >
      {isSuccessModalOpen && <div className="overlay"></div>}
      <div className="form-to-order-wrapper">
        <div className="return-btn-wrapper" onClick={closeModal}>
          <img src="pictures/ph_x-light.png" alt="" />
        </div>
        <SparksHeading
          textHeading="Ве молиме внесете ги потребните информации"
          className="form-to-order"
        />
        {hasUserInLocalStorage && (
          <div className="checkbox-wrapper">
            <input
              name="fill"
              id="fill"
              type="checkbox"
              checked={fillCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="fill">вметни ги информациите од мојот профил</label>
          </div>
        )}
        <div className="input-section">
          <div className="input-wrapper">
            <label htmlFor="name">
              Име<span className="red-star">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={fillCheckboxChecked ? userData.name : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">
              Презиме<span className="red-star">*</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              value={fillCheckboxChecked ? userData.lastname : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="address">
              Адреса на живеење<span className="red-star">*</span>
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              value={fillCheckboxChecked ? userData.address : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="number">
              Телефонски број
              <span className="red-star">*</span>
            </label>
            <input
              id="number"
              name="number"
              type="text"
              required
              value={fillCheckboxChecked ? userData.mobile : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">
              Емаил адреса
              <span className="red-star">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={fillCheckboxChecked ? userData.email : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="notifications-wrapper">
            <input type="checkbox" name="notifications" id="notifications" />
            <label htmlFor="notifications">
              сакам да добивам новости за идни попусти, нови колекции и промоции
              на мојата емаил адреса.
            </label>
          </div>
        </div>
        <div className="order-or-cancel">
          <button className="order-btn" onClick={handleOrderButtonClick}>
            Нарачај
          </button>
          <button className="cancel-btn" onClick={() => closeModal()}>
            Откажи
          </button>
        </div>
        {isSuccessModalOpen && (
          <SuccessModal handleSuccessModalClose={handleSuccessModalClose} />
        )}
      </div>
    </div>
  );
};

export default FormToOrder;
