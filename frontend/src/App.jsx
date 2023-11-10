import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./scss/root.scss";
import Footer from "./components/Footer";
import "./scss/Footer.scss";

function App() {
  const [url, setUrl] = useState("https://opentdb.com/api.php?amount=1");
  return (
    <>
      <Navbar />
      <main>
        <Outlet setUrl={setUrl} url={url} />
      </main>
      <Footer />
    </>
  );
}

export default App;
