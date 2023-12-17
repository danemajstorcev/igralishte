import "./Size.scss";

interface SizeProps {
  sizeProp?: string;
}
const Size = ({ sizeProp }: SizeProps) => {
  return (
    <div className="size-container">
      <div className="size-heading">
        <span className="size-text">Величина</span>{" "}
        <span className="size-mark">{sizeProp}</span>{" "}
        <span className="size-left">*само 1 парче</span>
      </div>
      <div className="size-description">
        Совет за величина: ова парче е направено од материјал кој не се
        растегнува. Одговара на наведената величина.
      </div>
      <div className="see-sizes">види ги димензиите</div>
    </div>
  );
};

export default Size;
