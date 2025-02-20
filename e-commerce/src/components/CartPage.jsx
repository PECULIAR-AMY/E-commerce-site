import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              {/* Item Image */}
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded mr-4" />

              {/* Item Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-3 py-1 bg-green-500 text-white rounded">
                  +
                </button>
                <button 
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-3 py-1 bg-yellow-500 text-white rounded">
                  -
                </button>
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 py-1 bg-red-500 text-white rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Total Items: {totalQuantity}</h3>
            <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>

          {/* Clear Cart Button */}
          <button 
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
