import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setQuery } from "../searchSlice";
import { selectCartCount } from "../cartSlice"; // Import selector
import { ShoppingCart, Heart, User } from "lucide-react";

function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartCount = useSelector(selectCartCount);

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setError("Search cannot be empty.");
            return;
        }
        setError(""); // Clear error if input is valid
        dispatch(setQuery(searchQuery)); // Update Redux state
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        setSearchQuery(""); // Clear input field
    };

    return (
        <div className="flex justify-between items-center py-4 border-b border-gray-300 px-20">
            <h1 className="text-3xl font-extrabold text-gray-800">Exclusive</h1>
            <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
                <Link to="/" className="hover:text-red-500">Home</Link>
                <Link to="/Contact" className="hover:text-red-500">Contact</Link>
                <Link to="/About" className="hover:text-red-500">About</Link>
                <Link to="/signup" className="hover:text-gray-500">Sign Up</Link>
            </nav>
            <div className="flex gap-4 items-center">
                {/* Search Bar */}
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-gray-400'}`} 
                    />
                    {error && <p className="text-red-500 text-xs absolute -bottom-5 left-0">{error}</p>}
                </div>
                <button 
                    onClick={handleSearch}
                    className="px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                    Search
                </button>

                {/* Wishlist Icon */}
                <Heart className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />

                {/* Cart Icon with Badge */}
                <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                    <ShoppingCart className="text-gray-600 hover:text-gray-900" size={24} />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>

                {/* User Profile Icon */}
                <User className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
            </div>
        </div>
    );
}

export default NavBar;
