import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
      <>
        <Navbar />
        <main className="App">
          <Home />
        </main>
      </>
  );
}

export default App;
