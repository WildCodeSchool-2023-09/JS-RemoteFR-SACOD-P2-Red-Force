import Navbar from "./components/Navbar";
import "./scss/root.scss";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
import "./scss/Footer.scss";

function App() {
  return (
    <main className="main-master">
      <Navbar />
      <Home />
      <Footer />
      <Quiz />
    </main>
  );
}

export default App;
