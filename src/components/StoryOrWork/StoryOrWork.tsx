import "./StoryOrWork.scss";

interface StoryOrWorkProps {
  image: string;
  header: string;
  text: string;
  isActive: boolean;
}

const StoryOrWork = ({ image, header, text, isActive }: StoryOrWorkProps) => {
  return (
    <div className={`story-or-work ${isActive ? "active" : ""}`}>
      <img className="about-us-pic" src={image} alt="" />
      <div className="who-are-we">{header}</div>
      <div className="who-are-we-txt">{text}</div>
    </div>
  );
};

export default StoryOrWork;
