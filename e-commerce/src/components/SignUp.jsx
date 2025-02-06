import { Heart, ShoppingCart, User, ArrowRight, ArrowLeft } from 'lucide-react';
import ShopItem from '../images/shop items.jpg';

const SignUp = () => {
  return (
    <div className="p-4">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md rounded-lg">
        <div className="text-2xl font-bold">Exclusive</div>
        <div className="flex gap-6 text-lg">
          <div className="hover:text-blue-500 cursor-pointer">Home</div>
          <div className="hover:text-blue-500 cursor-pointer">Contact</div>
          <div className="hover:text-blue-500 cursor-pointer">About</div>
          <div className="hover:text-blue-500 cursor-pointer">Sign Up</div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Heart size={24} className="cursor-pointer text-gray-600 hover:text-red-500" />
          <ShoppingCart size={24} className="cursor-pointer text-gray-600 hover:text-blue-500" />
          <User size={24} className="cursor-pointer text-gray-600 hover:text-green-500" />
        </div>
      </div>

      {/* Category Section */}
      <div className="flex items-center justify-between mt-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold">Browse By Category</h1>
            <ArrowLeft size={24} className="cursor-pointer hover:text-gray-500" />
            <ArrowRight size={24} className="cursor-pointer hover:text-gray-500" />
          </div>

          <div className="grid grid-cols-4 gap-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="bg-blue-500 p-10 rounded-md hover:opacity-75 cursor-pointer"></div>
            <div className="bg-red-500 p-10 rounded-md hover:opacity-75 cursor-pointer"></div>
            <div className="bg-green-500 p-10 rounded-md hover:opacity-75 cursor-pointer"></div>
            <div className="bg-yellow-500 p-10 rounded-md hover:opacity-75 cursor-pointer"></div>
          </div>
        </div>
        
        {/* Image */}
        <img src={ShopItem} alt="Shop Items" className="w-96 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default SignUp;
