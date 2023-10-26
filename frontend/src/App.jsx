import "./App.css";
import Navbar from "./components/Navbar";
import "./scss/root.scss";
import Home from "./pages/Home";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
