import "./QuantityCounter.scss";

const QuantityCounter = () => {
  return (
    <div className="quantity-counter-wrapper">
      <div className="quantity">Количина:</div>
      <span className="plus-or-minus">-</span>{" "}
      <span className="quantity-number">1</span>
      <span className="plus-or-minus">+</span>
    </div>
  );
};

export default QuantityCounter;
