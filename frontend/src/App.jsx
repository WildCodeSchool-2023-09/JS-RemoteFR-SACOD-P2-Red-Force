import Navbar from "./components/Navbar";
import "./scss/root.scss";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./scss/Footer.scss";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-master">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
