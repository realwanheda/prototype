import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Scan from "./pages/Scan/Scan.jsx";
import Touch from "./pages/Touch/Touch.jsx";
import Congratulations from "./pages/Congratulations/Congratulations.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/touch" element={<Touch />} />
          <Route path="/congrats" element={<Congratulations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
