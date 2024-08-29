import { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const Card = ({ category, desc, id, img, price, title, rating }) => {
  const [count, setCount] = useState(1);
  const handleAddCart = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: id,
        title: title,
        img: img,
        desc: desc,
        count: parseInt(count),
        price: price,
      }),
    );
  };

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div>
        <img src={img} className="card-image" />
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
      <p>${price}</p>
      <form onSubmit={handleAddCart}>
        <input
          type="number"
          onChange={(e) => setCount(e.target.value)}
          defaultValue={count}
        />
        <button>Add to cart</button>
      </form>
    </div>
  );
};

export default Card;
