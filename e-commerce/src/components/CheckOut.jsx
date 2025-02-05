import { useState, useEffect} from 'react'
import { Heart, ShoppingCart, User, Circle } from 'lucide-react'
import axios from 'axios'

function CheckOut(){
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


    return(
        <div>
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
      <h2 className='mt-4 mb-6'>Home/ My Account /Product / View Cart/ CheckOut</h2>

      <div className='mt-4 mb-6'>
        <h3>Billing Details</h3>
      </div>

      <div className='flex gap-10'>
        <form>
        <label className='block text-grey-500 mb-4'>First Name</label>
            <input 
              type='text'
              placeholder=''
              className='border p-2 w-full mt-1 mb-10'
            />
            <label className='block text-grey-500 mb-4 '>Company Name</label>
            <input 
              type='text'
              placeholder=''
              className='border p-2 w-full mt-1'
            />
            <label className='block text-grey-500 mt-10 mb-4'>Street address</label>
            <input 
              type='text'
              placeholder=''
              className='border p-2 w-full mt-1'
            />
            <label className='block text-grey-500'>Apartment,floor,etc(optional)</label>
            <input 
              type='text'
              placeholder=''
              className='border p-2 w-full mt-1'
            />
            <label className='block text-grey-500 mt-10'>Town/City</label>
            <input 
              type='text'
              placeholder=''
              className='border p-2 w-full mt-5'
            />
        </form>
        <div className=" mt-10">
        <ul>
        {Items.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-48 h-20 object-cover mx-auto"
            />
            <h3 className="text-lg font-semibold mt-2">{Items.title}</h3>
          </li> 
        ))}
      </ul>

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
        </div>
        <div className='flex gap-50 mt-10'>
        <div>
            <h1>Subtotal</h1>
        </div>
        <dv>
            <h1>price</h1>
        </dv>
      </div>
      <hr  className="border border-gray-300 mt-6 mb-4"/>
      <div className='flex gap-50'>
       <div>
        <h1>Shipping</h1>
       </div>
       <div>
        <h1>Free</h1>
       </div>
      </div>
      <hr  className="border border-gray-300 mt-6 mb-8"/>
      <div className='flex gap-50 mb-5'>
       <div>
        <h1>Total:</h1>
       </div>
       <div>
        <h1>$</h1>
       </div>
      </div>
      <div className='flex gap-50'>
       <div>
       <Circle size={20}  />
       </div>
       <div>
        <h1>Bank</h1>
       </div>
       <div>
        <h1>Master Card</h1>
       </div>
      </div>
      <div className='flex gap-10 mb-5 mt-5'>
        <div>
        <Circle size={20}  />
        </div>
        <div>
            <h1>Cash on delivery</h1>
        </div>
      </div>
      <div className='flex gap-20 '>
       <button className='border pl-5 pr-5 pt-2 pb-2'>Coupon code</button>
       <button className='border bg-red-500 pl-5 pr-5 pt-2 pb-2'>Apply Coupon</button>
      </div>
      </div>
      </div>
        </div>
    )
} 

export default CheckOut;