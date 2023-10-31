import QuizCard from "../components/QuizCard";
import "../scss/root.scss";

export default function Quiz() {
  return (
    <div>
      <QuizCard
        questionValue="Comment ça va ?"
        lifeValue="4"
        scoreValue="25 874"
        category="Vehicles"
        level=""
        timeValue="1:14"
      />
    </div>
  );
}
