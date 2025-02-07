
import { ShoppingCart, Heart, User} from "lucide-react";
import { Link } from 'react-router-dom'

function NavBar(){

    return (
        <div className="flex justify-between items-center py-4 border-b border-gray-300 p-20">
        <h1 className="text-3xl font-extrabold text-gray-800">Exclusive</h1>
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <Link Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/Contact" className="hover:text-red-500">Contact</Link>
          <Link to="/About" className="hover:text-red-500">About</Link>
          <Link to="/Signup" className="hover:text-gray-500">Sign Up</Link>
        </nav>
        <div className="flex gap-4 items-center">
          <input type="text" placeholder="Search" className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
          <Heart className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
          <ShoppingCart className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
          <User className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
        </div>
      </div>
 )}


 

 export default NavBar;
 