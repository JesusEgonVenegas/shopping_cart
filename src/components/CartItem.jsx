import "./CartItem.css";
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.img} />
      <div>
        <p className="cart-item-name">{item.title}</p>
        <p className="cart-item-count">{item.count}</p>
      </div>
      {/* <p className="cart-item-price">{item.price}</p> */}
    </div>
  );
};

export default CartItem;
