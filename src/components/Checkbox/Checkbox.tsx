import "./Checkbox.scss";

interface CheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox = ({ id, name, checked, onChange, label }: CheckBoxProps) => (
  <div className="checkbox-wrapper">
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />{" "}
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Checkbox;
