import "./Cart.css";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { USDollar } from "../util";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const cartDialog = useRef();
  const cart = useSelector((state) => state.cart);
  let cartCount = Object.keys(cart).reduce(
    (acc, current) => acc + cart[current].count,
    0,
  );
  let cartTotal = Object.keys(cart).reduce(
    (acc, current) => acc + cart[current].price,
    0,
  );
  const handleDialog = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleDialog}>cart</button>
      <p>{cartCount}</p>
      {showCart && (
        <div className="cart-modal" ref={cartDialog}>
          <ul>
            {Object.keys(cart).map((item, idx) => (
              <li key={idx}>
                <CartItem item={cart[item]} />
              </li>
            ))}
            <li className="cart-total">
              <p>Total</p>
              <p>{USDollar.format(cartTotal)}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
