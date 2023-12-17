import { useState } from "react";
import StoryOrWork from "../../components/StoryOrWork/StoryOrWork";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrums";
import SparksHeading from "../../components/SparksHeading/SparksHeading";
import "./AboutUs.scss";

const AboutUs = () => {
  const [selectedLink, setSelectedLink] = useState("story");

  const breadcrumbs = [
    { path: "/", breadcrumbName: "Почетна" },
    { path: "/about-us", breadcrumbName: "За Нас" },
  ];

  const handleLinkClick = (link: string) => {
    if (link === "work") {
      setSelectedLink("work");
    } else {
      setSelectedLink("story");
    }
  };

  const renderContent = () => {
    if (selectedLink === "story") {
      return (
        <StoryOrWork
          image="pictures/604eee326a61e796f4565a69fd3244b5.png"
          header="Кои сме ние?"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          isActive={false}
        />
      );
    } else if (selectedLink === "work") {
      return (
        <StoryOrWork
          image="https://picsum.photos/id/13/367/267"
          header="Што работиме"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          isActive={true}
        />
      );
    }
  };

  return (
    <div className="about-us">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <SparksHeading textHeading="За Нас" />
      <div className="story-and-work">
        <span
          className={`story ${selectedLink === "story" ? "active" : ""}`}
          onClick={() => handleLinkClick("story")}
        >
          Нашата приказна
        </span>
        <span className="between">|</span>
        <span
          className={`work ${selectedLink === "work" ? "active" : ""}`}
          onClick={() => handleLinkClick("work")}
        >
          Нашата работа
        </span>
      </div>
      {renderContent()}
    </div>
  );
};

export default AboutUs;
