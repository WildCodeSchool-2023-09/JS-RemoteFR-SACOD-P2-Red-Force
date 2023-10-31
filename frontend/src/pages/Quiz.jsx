import QuizCard from "../components/QuizCard";
import "../scss/root.scss";

export default function Quiz() {
  return (
    <div>
      <QuizCard
        questionValue="Comment ça va ?"
        lifeValue="3"
        scoreValue="1234"
        category=""
        level=""
        timeValue="1:54"
      />
    </div>
  );
}
