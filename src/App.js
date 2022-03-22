import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About/index.js";
import Home from "./pages/Home/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
