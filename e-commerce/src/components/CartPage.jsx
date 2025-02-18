
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <p>{item.name} - ${item.price} x {item.quantity}</p>
              <div>
                <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 bg-green-500 text-white">+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 bg-yellow-500 text-white mx-2">-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="px-2 bg-red-500 text-white">Remove</button>
              </div>
            </div>
          ))}
          <h3 className="mt-4">Total Items: {totalQuantity}</h3>
          <h3 className="mb-4">Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-4 py-2">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
