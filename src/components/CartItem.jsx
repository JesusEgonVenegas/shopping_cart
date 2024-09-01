import "./CartItem.css";
import { USDollar } from "../util";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../features/cart/cartSlice";
import { useState } from "react";
const CartItem = ({ item }) => {
  console.log(item);
  const cart = useSelector((state) => state.cart);

  const [newCount, setNewCount] = useState(item.count);
  const dispatch = useDispatch();
  const handleChangeCount = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    if (isNaN(value) || value < 1) return;
    setNewCount(value);
    dispatch(
      changeCount({
        id: item.id,
        count: value,
      }),
    );
  };
  return (
    <div className="cart-item">
      <img src={item.img} />
      <div className="full-width">
        <p className="cart-item-name">{item.title}</p>
        <div className="justify-between">
          <p className="cart-item-count">
            Quantity:
            <input
              type="number"
              value={newCount}
              onChange={handleChangeCount}
              min={1}
            />
          </p>
          <p className="cart-item-price">{USDollar.format(item.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
