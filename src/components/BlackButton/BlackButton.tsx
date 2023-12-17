import "./BlackButton.scss";

interface BlackButtonProps {
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const BlackButton = ({ buttonText }: BlackButtonProps) => {
  return (
    <button className="black-btn" type="submit">
      <span className="button-txt">{buttonText}</span>
    </button>
  );
};

export default BlackButton;
