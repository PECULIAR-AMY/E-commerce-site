import { Heart, ChevronRight, Star, Delete, Headphones, ArrowLeft, ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import ImageLogo from '../images/iPhone 15 Pro.jpeg'

import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => setItems(response.data))
            .catch(error => console.error("Error fetching data", error));
    }, []);

        const [watchCount, setWatchCount] = useState(() => {
            return parseInt(localStorage.getItem("watchCount")) || 0;
        });
        
        const [currentTime, setCurrentTime] = useState(new Date());
    
        useEffect(() => {
            localStorage.setItem("watchCount", watchCount);
        }, [watchCount]);
    
        useEffect(() => {
            // Update time every second
            const timeInterval = setInterval(() => {
                setCurrentTime(new Date());
                setWatchCount(prevCount => prevCount + 1);
            }, 1000);
    
            return () => clearInterval(timeInterval); // Cleanup interval on unmount
        }, []);
    
    

    return (
        <div className="px-6 md:px-16 max-w-screen-xl mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-10 items-center mt-10">
            <div className="space-y-4 w-full md:w-1/4">
    <h1 className="text-lg font-semibold">Categories</h1>
    {[
        "Women's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby Toys",
        "Groceries & Pets",
        "Health & Beauty"
    ].map(category => (
        <div className="flex items-center justify-between cursor-pointer hover:text-red-500" key={category}>
            <h1>{category}</h1>
            <ChevronRight size={15} />
        </div>
    ))}
</div>
                {/* Divider */}
                <div className="hidden md:block w-0.5 bg-gray-300 h-50"></div>
                {/* Image */}
                <img src={ImageLogo} alt="iPhone 15 Pro" className="w-full md:w-3/4 object-cover rounded-lg shadow-lg h-80" />
            </div>

            {/* Flash Sales */}
            <div className="mt-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Flash Sales</h1>
                    <button className="bg-red-500 text-white py-2 px-4 rounded">View All</button>
                </div>
          
            {/* (Locally store watch counter) */}

            <div className="p-4 border rounded-lg w-64 text-center">
            <h1 className="text-lg font-semibold">Watch Count: {watchCount}</h1>
            <p className="text-sm">{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
        </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {items.slice(0, 4).map((item) => (
                        <li key={item.id} className="border p-4 rounded-lg shadow-md text-center relative">
                            <Heart size={24} className="absolute top-2 left-2 text-red-500 cursor-pointer" />
                            <Delete size={24} className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
                            <div className="w-full h-40 flex justify-center items-center">
                                <img src={item.image} alt={item.title} className="h-24 object-contain" />
                            </div>
                            <h1 className="text-sm font-semibold truncate mt-2">{item.title}</h1>
                            <div className="flex justify-between items-center mt-2">
                                <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">${item.price}</button>
                            </div>
                            <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, index) => <Star key={index} size={14} color="gold" />)}
                            </div>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
   <div>
   <img src={ImageLogo} alt="iphone " className="w-full h-105 object-cover rounded-lg shadow-lg mt-6 mb-4" />
   </div>
   
   <div>
  <h1 className="text-sm text-red-500 mt-2">This Month</h1>
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-semibold">Explore Our Products</h1>
    <div className="flex gap-2">
      <ArrowLeft size={10} className="cursor-pointer" />
      <ArrowRight size={10} className="cursor-pointer" />
    </div>
  </div>

  <div>
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {items.slice(0, 4).map((item) => (
                        <li key={item.id} className="border p-4 rounded-lg shadow-md text-center relative">
                            <Heart size={24} className="absolute top-2 left-2 text-red-500 cursor-pointer" />
                            <Delete size={24} className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
                            <div className="w-full h-40 flex justify-center items-center">
                                <img src={item.image} alt={item.title} className="h-24 object-contain" />
                            </div>
                            <h1 className="text-sm font-semibold truncate mt-2">{item.title}</h1>
                            <div className="flex justify-between items-center mt-2">
                                <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">${item.price}</button>
                            </div>
                            <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, index) => <Star key={index} size={14} color="gold" />)}
                            </div>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
                        </li>
                    ))}
                </ul>
  </div>
</div>
   <div>
    <h1 className="text-sm text-red-500 mt-2">This Month</h1>
    <div className="flex gap-200">
    <h1 className="text-2xl">Best Selling Products</h1>

    </div>
    
    <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {items.slice(0, 4).map((item) => (
                        <li key={item.id} className="border p-4 rounded-lg shadow-md text-center relative">
                            <Heart size={24} className="absolute top-2 left-2 text-red-500 cursor-pointer" />
                            <Delete size={24} className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
                            <div className="w-full h-40 flex justify-center items-center">
                                <img src={item.image} alt={item.title} className="h-24 object-contain" />
                            </div>
                            <h1 className="text-sm font-semibold truncate mt-2">{item.title}</h1>
                            <div className="flex justify-between items-center mt-2">
                                <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">${item.price}</button>
                            </div>
                            <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, index) => <Star key={index} size={14} color="gold" />)}
                            </div>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
                        </li>
                    ))}
                </ul>
    </div>
    <div className="flex justify-center items-center ">
    <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded mb-4">View all products</button>
   </div>
   </div>
   <div className="flex gap-2 ">
        <div className="grid gap-3">

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {items.slice(0, 4).map((item) => (
                        <li key={item.id} className="border p-4 rounded-lg shadow-md text-center relative">
                            <Heart size={24} className="absolute top-2 left-2 text-red-500 cursor-pointer" />
                            <Delete size={24} className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
                            <div className="w-full h-40 flex justify-center items-center">
                                <img src={item.image} alt={item.title} className="h-24 object-contain" />
                            </div>
                            <h1 className="text-sm font-semibold truncate mt-2">{item.title}</h1>
                            <div className="flex justify-between items-center mt-2">
                                <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">${item.price}</button>
                            </div>
                            <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, index) => <Star key={index} size={14} color="gold" />)}
                            </div>
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
                        </li>
                    ))}
                </ul>
        </div>
    </div>
    <div className=" flex container gap-70  my-20 mb-6">
  <div className="border py-10 px-10">
    <Headphones  size={20}/>
  </div>
  <div className="border  py-10 px-10">
    <Headphones  size={20}/>
  </div>
  <div className="border  py-10 px-10">
    <Headphones  size={20}/>
  </div>
  <div className="border  py-10 px-10">
    <Headphones  size={20}/>
  </div>
   </div>

    
    {/* Footer */}
    <footer className="bg-black text-white mt-16 p-10">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h2 className="text-lg font-bold">Exclusive</h2>
            <p>Subscribe & get 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 rounded-md text-black w-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">Support</h2>
            <p>111 Bjoy Sarani, Dhaka, Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+4566787897832</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Account</h2>
            <ul className="space-y-1">
              <li>My Account</li>
              <li>Login/Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Download App</h2>
            <p>Save $3 with our new look</p>
            <div className="flex gap-3 mt-2">
              <Instagram size={24} />
              <Facebook size={24} />
              <Twitter size={24} />
              <Youtube size={24} />
            </div>
          </div>
        </div>
      </footer>
   </div>
    );
};

export default Home;