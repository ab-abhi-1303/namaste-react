import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <div>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && <h1>Add Items in Cart...</h1>}
      <div>
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                {item.title} - {item.price}
              </li>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
};

export default Cart;
