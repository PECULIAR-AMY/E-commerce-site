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
         
        <ul>
        {Items.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-48 h-20 object-cover mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2"></h3>
          </li>
        ))}
      </ul>
         <h2>price</h2>
         <h1>Quantity</h1>
         <h2>Subtotal</h2>
        </div>
        <div className="flex gap-100 mt-10">
        
        <ul>
        {Items.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-48 h-20 object-cover mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2"></h3>
          </li>
        ))}
      </ul>
         <h2>Price</h2>
         <h1>Quantity</h1>
         <h2>Subtotal</h2>
        </div>  
      </div>

     <div className='flex gap-100 mt-20'>
     <div>
        <button className='border pt-4 pb-4 pr-4 pl-4'>  Return to shop</button>
      </div>
      <div>
        <button className='border pt-4 pb-4 pr-4 pl-4'> Update Cart</button>
      </div>
     </div>

     <div className='flex gap-20 mt-10' >
      <div>
        <button className='border pt-4 pb-4 pr-4 pl-4'> Coupon code</button>
      </div>
      <div>
        <button className='border pt-4 pb-4 pr-4 pl-4 bg-red-500'>  Coupon code</button>
      </div>
      <div>
        <button className='border pt-4 pb-4 pr-4 pl-4 '> 
          Cart total

          <button className='p-4'>subtotal</button>
          <button> $1750</button>
        </button>
       
      </div>
      
     </div>

    </di>
  )
}

export default Cart;