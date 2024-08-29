import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
