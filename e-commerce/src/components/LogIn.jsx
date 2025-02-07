import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import ImageLogo from '../images/shop items.jpg';

const Login = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
            
            {/* Login Section */}
            <div className="flex flex-col md:flex-row items-center gap-16 mt-12 w-full max-w-6xl bg-white p-8 shadow-lg rounded-xl">
                <img src={ImageLogo} alt="image" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">Log in to Exclusive</h1>
                    <h3 className="text-gray-600 mt-2">Enter your details below</h3>
                    
                    <form className="mt-6">
                        <label className="block mb-4">
                            <span className="text-gray-700">Name:</span>
                            <input
                                type="text"
                                name="name"
                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Your name"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Email:</span>
                            <input
                                type="email"
                                name="email"
                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Your email"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Message:</span>
                            <textarea
                                name="message"
                                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Your message"
                            />
                        </label>
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Log In
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">
                                Forgotten password?
                            </button>
                        </div>
                    </form>
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
    )
}


export default Login; 