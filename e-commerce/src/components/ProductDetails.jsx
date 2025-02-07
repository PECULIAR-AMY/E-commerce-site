import { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart,  } from "lucide-react";

function Cart() {
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
    <div>

      <div className="flex gap-20 p-10 ">
        <h1 className="text-2xl font-bold">Wishlist</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Move All to Bag</button>
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

      <div className="flex gap-20 mt-8">
        <button>Just for you</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">See All</button>
      </div>
      <ul className=" flex p-4 gap-10">
        {items.slice(5,9).map((item) => (
          <div key= {item.id} className="border p-4 rounded-lg shadow-md">
            <img 
            src= {item.image}
            alt={item.title}
            className=" h-24 rounded  "
            />
            <div className="flex bg-blue-500 gap-3">
                <ShoppingCart size={20} />
                <h4>Add to cart</h4>
            </div>
            <h2 className="text-lh font-bold mt-2">{item.title}</h2>
            <button className="bg-blue-500">{item.price}</button>
            <h2></h2>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
