import "./App.css";
import Dificulty from "./components/Dificulty";
import Category from "./components/Category";
import Question from "./components/Question";
import Start from "./components/Start";

function App() {
  return (
    <main className="App">
      <Category />
      <Dificulty styles="2" name="facile" />
      <Question />
      <Start name="commencer une partie" />
    </main>
  );
}

export default App;
