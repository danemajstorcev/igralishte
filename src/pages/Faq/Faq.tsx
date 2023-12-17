import QuestionContainer from "../../components/QuestionContainer/QuestionContainer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrums";
import SparksHeading from "../../components/SparksHeading/SparksHeading";
import { questions } from "../../utils/constants";
import "./Faq.scss";

const Faq = () => {
  const breadcrumbs = [
    { path: "/", breadcrumbName: "Почетна" },
    { path: "/faq", breadcrumbName: "Често поставувани прашања" },
  ];

  return (
    <div className="faq">
      <div className="main-links">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <SparksHeading textHeading="FAQ" className="contact" />
      <div className="question-container-wrapper">
        {questions.map((question, index) => (
          <QuestionContainer
            key={index}
            question={`${index + 1}. ${question.question}`}
            answer={question.answer}
            even={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
