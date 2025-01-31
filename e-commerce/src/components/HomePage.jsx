import { ShoppingCart, Heart, User } from "lucide-react";
import ImageLogo from '../images/iPhone 15 Pro.jpeg'
import axios from 'axios'
import { useEffect, useState} from 'react';


function Home (){

    const [items, setItems] = useState([]);

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products") // ✅ Correct API endpoint
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }, []);
    return (
   <di>
    <div className='flex items-center justify-between p-4'>
    <div className='font-size-18'>Exclusive</div>
    <div className=''>Home</div>
    <div className=''>Contact</div>
    <div className=''>About</div>
    <div>SignUp</div>
    <input
     type='Search'
     placeholder='search'
     />
     <Heart size ={24} />
     <ShoppingCart size={24} />
     <User size= {24} />
    </div>
    <div className="flex gap-40 mt-20">
        <div>
            <h1>Women`s Fashion </h1>
            <h1>Men`s Fashion </h1>
            <h1>Electronics </h1>
            <h1>Home $ Lifestyle </h1>
            <h1>Medicine</h1>
            <h1>Spots and Outdoor</h1>
            <h1>Baby`s Toys</h1>
            <h1>Groceries $ Pets</h1>
            <h1>Health $ Beauty</h1>
        </div>
        <img src={ImageLogo} alt="iphone " className="h-55 w-100" />
    </div>
    <div className="flex">
        <button className="bg-red-500"></button>
    </div>
    <div>
        <div>
            <h1>Flash Sales</h1>
        </div>
        <div>
            <h2>DATE</h2>
        </div>
    </div>
    <div>
    </div>

    <ul className=" flex p-4 gap-10">
        {items.slice(0,4).map((item) => (
          <div key= {item.id} className="border p-4 rounded-lg shadow-md">
            <img 
            src= {item.image}
            alt={item.title}
            className=" h-24 rounded "/>
            <div className="flex bg-blue-500 gap-3">
                <ShoppingCart size={20} />
                <h4>Add to cart</h4>
            </div>
            <h2 className="text-lh font-bold mt-2">{item.title}</h2>
            <button className="bg-blue-500">{item.price}</button>
          </div>
        ))}
      </ul>
   </di>
    );
};

export default Home;