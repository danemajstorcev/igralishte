import "./ColorRectangle.scss";

export interface ColorRectangleProps {
  id?: string;
  name?: string;
  checked?: boolean;
  onClick?: (name: string) => void;
  className: string;
}

const ColorRectangle = ({
  className,
  id,
  name,
  checked,
  onClick,
}: ColorRectangleProps) => {
  return (
    <div className={`color-rectangle ${className}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={() => onClick && onClick(`${name}`)}
      ></input>
      <label htmlFor={id}>
        {checked && (
          <span style={{ color: className === "black" ? "white" : "black" }}>
            &#10003;
          </span>
        )}
      </label>
    </div>
  );
};

export default ColorRectangle;
