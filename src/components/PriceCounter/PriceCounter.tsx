import { useEffect, useState } from "react";
import ProductAndPrice from "../ProductAndPrice/ProductAndPrice";
import FormToOrder from "../FormToOrder/FormToOrder";
import { Product } from "../../types/types";
import scrollToTop from "../../utils/ScrollToTop";
import "./PriceCounter.scss";

interface PriceCounterProps {
  cart: Product[];
  onDeleteAll: () => void;
  setCart: (cart: Product[]) => void;
}

const PriceCounter = ({ cart, onDeleteAll, setCart }: PriceCounterProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let finalPrice = 0;
  let totalSum = 0;

  if (cart.length > 0) {
    totalSum = cart.reduce((sum, product) => sum + product.price, 0);
    const discountedSum = totalSum * 0.8;
    finalPrice = discountedSum + 150;
  }

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "visible";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isModalOpen]);

  return (
    <div className="price-counter-main-container">
      <div className="products-and-price">
        {cart.map((product: Product, index: number) => (
          <ProductAndPrice
            key={index}
            name={product.name}
            price={product.price}
          />
        ))}
        {cart.length > 0 && (
          <div className="delivery">
            <div className="delivery-to-address">+ достава до адреса</div>
            <div className="delivery-price">150 ден</div>
          </div>
        )}
        {cart.length > 0 && (
          <div className="discount">
            <div className="discount-text">1х -20% попуст!</div>
            <div className="discount-number">-{totalSum * 0.2} ден.</div>
          </div>
        )}
        <div className="golden-line"></div>
        <div className="total">
          <div className="total-text">Вкупно:</div>
          <div className="total-price">{finalPrice} ден.</div>
        </div>
        <div className="golden-line"></div>
        <div className="continue-or-delete">
          {cart.length > 0 && (
            <button
              className="continue-button"
              onClick={() => setIsModalOpen(true)}
            >
              Продолжи
            </button>
          )}
          {cart.length > 0 && (
            <img
              src="pictures/ri_delete-bin-6-line.png"
              alt=""
              onClick={onDeleteAll}
            />
          )}
        </div>
      </div>
      {isModalOpen && (
        <FormToOrder
          closeModal={() => {
            setIsModalOpen(false);
            scrollToTop();
          }}
          setCart={setCart}
        />
      )}
    </div>
  );
};

export default PriceCounter;
