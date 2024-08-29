import "./Cart.css";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const cartDialog = useRef();
  const cart = useSelector((state) => state.cart);
  let cartLength = Object.keys(cart).length;
  const handleDialog = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleDialog}>cart</button>
      <p>{cartLength}</p>
      {showCart && (
        <div className="cart-modal" ref={cartDialog}>
          <ul>
            {Object.keys(cart).map((item, idx) => {
              console.log(cart[item]);
              return (
                <li key={idx}>
                  <CartItem item={cart[item]} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
