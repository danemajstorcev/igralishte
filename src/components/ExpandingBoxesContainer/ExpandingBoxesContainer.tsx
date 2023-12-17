import ExpandingBox from "../ExpandingBox/ExpandingBox";
import "./ExpandingBoxesContainer.scss";

const ExpandingBoxesContainer = () => {
  return (
    <div className="expanding-boxes-container">
      <ExpandingBox
        boxIcon="/pictures/Box icons.png"
        boxHeader="Контрола на квалитет"
      />
      <ExpandingBox
        boxIcon="/pictures/Box icon -box.png"
        boxHeader="Политика на враќање"
      />{" "}
      <ExpandingBox
        boxIcon="/pictures/Box icons-truck.png"
        boxHeader="Достава"
      />{" "}
      <ExpandingBox
        boxIcon="/pictures/boxfluent_chat-help-20-regular.png"
        boxHeader="Помош"
      />
    </div>
  );
};

export default ExpandingBoxesContainer;
