import { useEffect, useState} from 'react'
import axios from 'axios';

import { ShoppingCart, Heart, User } from "lucide-react";



function Cart (){
  const [Items, setItems] = useState([]);
  
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
    <di>
  <div className="flex items-center justify-between p-4">
        <div className="text-lg font-bold">Exclusive</div>
        <div>Home</div>
        <div>Contact</div>
        <div>About</div>
        <div>Sign Up</div>
        <input type="search" placeholder="Search" className="border p-2" />
        <Heart size={24} />
        <ShoppingCart size={24} />
        <User size={24} />
      </div>
      <h2>Home/Cart</h2>

      <div className=" mt-10">
       <div className="flex gap-100">
         <h2>Product</h2>
         <h2>Price</h2>
         <h1>Quantity</h1>
         <h2>Subtotal</h2>
        </div> 
        <div className="flex gap-100 mt-10">
         <h2>Product</h2>
         <h2>Price</h2>
         <h1>Quantity</h1>
         <h2>Subtotal</h2>
        </div>
        <div className="flex gap-100 mt-10">
         <h2>Product</h2>
         <h2>Price</h2>
         <h1>Quantity</h1>
         <h2>Subtotal</h2>
        </div>  
      </div>

    </di>
  )
}

export default Cart;