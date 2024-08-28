import { useState } from "react";
import "./Card.css";
const Card = ({ category, desc, id, img, price, title, rating, setCart }) => {
  const [count, setCount] = useState(1);
  const handleAddCart = (e) => {
    e.preventDefault();
    setCart((prev) => prev + 1);
  };
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
