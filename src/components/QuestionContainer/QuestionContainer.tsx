import "./QuestionContainer.scss";

interface QuestionContainerProps {
  question: string;
  answer: string;
  even: boolean;
}

const QuestionContainer = ({
  question,
  answer,
  even,
}: QuestionContainerProps) => {
  return (
    <div className={`question-container ${even ? "even" : ""}`}>
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default QuestionContainer;
