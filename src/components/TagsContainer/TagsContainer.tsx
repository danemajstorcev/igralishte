import Tag from "../Tag/Tag";
import "./TagsContainer.scss";

interface TagsContainerProps {
  tagNames: string[];
}
const TagsContainer = ({ tagNames }: TagsContainerProps) => {
  return (
    <div className="tags-container">
      <div className="tags-header">Ознаки:</div>
      <div className="tags">
        {tagNames.map((tagName, index) => (
          <Tag key={index} name={tagName} />
        ))}
      </div>
    </div>
  );
};

export default TagsContainer;
