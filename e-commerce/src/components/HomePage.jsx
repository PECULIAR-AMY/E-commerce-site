import { useEffect, useState } from 'react';
import { Heart, ChevronRight, Star, Trash as Delete, ArrowLeft, ArrowRight } from "lucide-react";
import ImageLogo from '../images/iPhone 15 Pro.jpeg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice"; // Ensure the correct path to cartSlice.js

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [watchCount, setWatchCount] = useState(() => parseInt(localStorage.getItem("watchCount")) || 0);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => setItems(response.data))
            .catch(error => console.error("Error fetching data", error));
    }, []);

    useEffect(() => {
        localStorage.setItem("watchCount", watchCount);
    }, [watchCount]);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setWatchCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    useEffect(() => {
        const clockInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(clockInterval);
    }, []);

    return (
        <div className="px-6 md:px-16 max-w-screen-xl mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-10 items-center mt-10">
                <div className="space-y-4 w-full md:w-1/4">
                    <button className="text-lg font-semibold">Categories</button>
                    {[
                        { name: "Women's Fashion", route: "/women-category" },
                        { name: "Men's Fashion",  route: "/men-fashion" },
                        { name: "Home & Lifestyle" ,  route: "/women-category" },
                        { name: "Sunglasses" ,  route: "/sunglasses" },
                        { name: "Gadgets",  route: "/gadgets" },
                        { name: "Groceries" , route: "/groceries" },
                        { name: "Beauty & Lifestyle",  route: "/beautylifestyle" },
                        { name: "Fragrances" ,  route: "/fragrances"}
                    ].map(category => (
                        <div 
                            key={category.name} 
                            className="flex items-center justify-between cursor-pointer hover:text-red-500"
                            onClick={() => category.route && navigate(category.route)}
                        >
                            <h1>{category.name}</h1>
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

                {/* Watch Counter */}
                <div className="p-4 border rounded-lg w-64 text-center bg-blue-300">
                    <h1 className="text-lg font-semibold">Watch Count: {watchCount}</h1>
                    <p className="text-sm">{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {items.slice(0, 4).map((item) => (
                        <li key={item.id} className="border p-4 rounded-lg shadow-md text-center relative">
                            <Heart onClick={() => navigate("/cart")} size={24} className="absolute top-2 left-2 text-red-500 cursor-pointer" />
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
                            <button onClick={() => dispatch(addToCart(item))} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Additional Sections */}
            <div className="mt-10">
                <h1 className="text-sm text-red-500">This Month</h1>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Explore Our Products</h1>
                    <div className="flex gap-2">
                        <ArrowLeft size={10} className="cursor-pointer" />
                        <ArrowRight size={10} className="cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center ">
                <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded mb-4">View all products</button>
            </div>

            <div className="flex gap-2">
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
                                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded text-sm">Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
