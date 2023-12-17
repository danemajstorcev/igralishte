import "./Tag.scss";

interface TagProps {
  name: string;
}
const Tag = ({ name }: TagProps) => {
  return <div className="tag">{name}</div>;
};

export default Tag;
