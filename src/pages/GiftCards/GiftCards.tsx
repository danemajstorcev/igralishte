import GiftCardImage from "../../components/GiftCardImage/GiftCardImage";
import PinkButton from "../../components/PinkButton/PinkButton";
import "./GiftCards.scss";

const GiftCards = () => {
  return (
    <div className="gift-cards">
      <div className="gift-cards-header">Gift картички за подарок</div>
      <GiftCardImage
        image="pictures/604eee326a61e796f4565a69fd3244b5.png"
        imageText="Partygirl Gift card"
        imageTextStyle={{ top: "13.12px" }}
      />
      <GiftCardImage
        image="pictures/86b1c316d78e16b01bd6848acf94bef0.png"
        imageText="Vintage chick Gift card"
        imageTextStyle={{ bottom: "13.12px", flexDirection: "row-reverse" }}
      />
      <GiftCardImage
        image="pictures/c54dfa1aacec436225c6a3d100b58b76.png"
        imageText="Wavy baby Gift card"
        imageTextStyle={{ bottom: "21.12px" }}
      />
      <div className="pick-price">Одбери цена на подарок картичка:</div>
      <div className="pink-buttons">
        <PinkButton pinkButtonText="500 ден." />
        <PinkButton pinkButtonText="1000 ден." />
        <PinkButton pinkButtonText="2000 ден." />
        <PinkButton pinkButtonText="2500 ден." />
        <PinkButton pinkButtonText="4000 ден." />
      </div>
    </div>
  );
};

export default GiftCards;
