import Cart from "./Cart";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Shop Now
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <Cart />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
