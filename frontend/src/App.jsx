import Navbar from "./components/Navbar";
import "./scss/root.scss";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import "./scss/Footer.scss";

function App() {
  return (
    <main className="main-master">
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
