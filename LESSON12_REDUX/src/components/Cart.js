import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    console.log(cartItems);
  };
  return (
    <div className="w-6/12 text-center inline m-4 p-4">
      <div className="m-auto">
        <h1 className="p-4 font-bold text-lg">Cart</h1>
        <button
          onClick={handleClearCart}
          className="w-11 border border-black bg-red-300"
        >
          Clear Cart
        </button>
        <div>
          <div>
            {cartItems.map((c) => (
              <div>{c.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
