import { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart, Heart, User } from "lucide-react";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const shuffledItems = [...response.data].sort(() => Math.random() - 0.5);
        setItems(shuffledItems.slice(0, 1)); // ✅ Picks only 1 random item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Navbar */}
      <div className="flex items-center justify-between py-4 border-b mb-6">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Sign Up</a>
        </nav>
        <div className="flex items-center gap-4">
          <input type="search" placeholder="Search" className="border p-2 rounded-lg" />
          <Heart size={24} className="cursor-pointer" />
          <ShoppingCart size={24} className="cursor-pointer" />
          <User size={24} className="cursor-pointer" />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Home / Cart</h2>

      {/* Cart Header */}
      <div className="grid grid-cols-4 font-semibold border-b pb-2">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
      </div>

      {/* Cart Items */}
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-4 items-center py-4 border-b">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
            <p className="text-sm font-medium">{item.title}</p>
          </div>
          <p className="text-sm">${item.price.toFixed(2)}</p>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-12 border text-center rounded-md"
          />
          <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
        </div>
      ))}

      {/* Cart Actions */}
      <div className="flex justify-between mt-6">
        <button className="border px-6 py-2 rounded-md hover:bg-gray-100">Return to Shop</button>
        <button className="border px-6 py-2 rounded-md hover:bg-gray-100">Update Cart</button>
      </div>

      {/* Checkout Section */}
      <div className="flex justify-between mt-10 bg-gray-100 p-6 rounded-lg">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border p-2 rounded-lg w-1/3"
        />
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
          Apply Coupon
        </button>
        <div>
          <p className="text-lg font-semibold">Cart Total</p>
          <p className="text-sm">Subtotal: $1750</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md mt-2 hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
