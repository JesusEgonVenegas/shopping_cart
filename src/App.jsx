import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <Router>
      <Navbar cart={cart} />
      <main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
