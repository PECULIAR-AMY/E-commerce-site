import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [items, setItems] = useState([]);

  // Fetch products (simulating adding items to cart)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const shuffledItems = [...response.data].sort(() => Math.random() - 0.5);
        const cartItems = JSON.parse(localStorage.getItem("cart")) || shuffledItems.slice(0, 2).map(item => ({ ...item, quantity: 1 }));
        setItems(cartItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = items.filter(item => item.id !== itemId);
    setItems(updatedCart);
  };

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = items.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedCart);
  };

  // Clear entire cart
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Home / Cart</h2>

      {/* Cart Header */}
      <div className="grid grid-cols-4 font-semibold bg-gray-200 p-3 rounded-lg text-gray-700">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
      </div>

      {/* Cart Items */}
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="grid grid-cols-4 items-center py-4 border-b bg-white rounded-lg p-4 shadow-sm my-2">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
            </div>
            <p className="text-gray-700 text-sm">${item.price.toFixed(2)}</p>
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-14 border text-center rounded-md py-1"
            />
            <div className="flex items-center gap-4">
              <p className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 my-6">Your cart is empty.</p>
      )}

      {/* Cart Actions */}
      <div className="flex justify-between mt-6">
        <button className="border px-6 py-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium transition">
          Return to Shop
        </button>
        <button
          onClick={clearCart}
          className="border px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 font-medium transition"
        >
          Clear Cart
        </button>
      </div>

      {/* Checkout Section */}
      <div className="flex justify-between mt-10 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="border p-2 rounded-lg w-1/3 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          Apply Coupon
        </button>
        <div>
          <p className="text-lg font-semibold text-gray-800">Cart Total</p>
          <p className="text-sm text-gray-700">
            Subtotal: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md mt-2 hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
