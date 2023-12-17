import "./Marquee.scss";

const Marquee = () => {
  return (
    <p className="marquee">
      <span className="loop">
        Нова колекција
        <img src="pictures/emojione-monotone_eight-pointed-star.png" alt="" />
        <span className="winter-collection">
          Valentines Winter Collection 2023
        </span>
      </span>
    </p>
  );
};

export default Marquee;
