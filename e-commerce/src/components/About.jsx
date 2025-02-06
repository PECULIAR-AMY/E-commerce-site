import ImageLogo from '../images/We shop.jpg'
import { Heart, ShoppingCart, User, Twitter, Instagram, Linkedin, Truck, Headset, CheckCircle, Facebook, Youtube} from 'lucide-react'
import Image1 from '../images/standing man 1.jpg'
import Image2 from '../images/Beautiful woman 1.jpg'
import Image3 from '../images/Standing man 2.jpg'

const About = () =>{
return(
    <div className='px-20'>
    <div className="flex justify-between items-center py-4 border-b border-gray-300">
        <h1 className="text-3xl font-extrabold text-gray-800">Exclusive</h1>
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Sign Up</a>
        </nav>
        <div className="flex gap-4 items-center">
          <input type="text" placeholder="Search" className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
          <Heart className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
          <ShoppingCart className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
          <User className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-4 text-gray-500 text-sm">
        <span>Home</span> / <span className="font-semibold text-gray-800">About</span>
      </div>

      {/* Our Story Section */}
      <div className="bg-white p-8 shadow-lg rounded-xl mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">OUR STORY</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-gray-600 leading-relaxed md:w-2/3">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. 
            Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers 
            and 300 brands and serves 3 million customers across the region. Exclusive has more than 1 million products 
            to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer goods to electronics.
          </p>
          <img src={ImageLogo} alt="logo" className="w-80 h- 70 rounded-lg shadow-md" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {[{ img: Image1, name: "Tom Cruise", role: "Founder and Chairman" },
          { img: Image2, name: "Emma Walt", role: "Managing Director" },
          { img: Image3, name: "Will Smith", role: "Product Manager" }].map((person, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <img src={person.img} alt={person.name} className="w-55 h-62 object-cover rounded-full shadow-md" />
            <h1 className="text-lg font-bold mt-4">{person.name}</h1>
            <h3 className="text-gray-600">{person.role}</h3>
            <div className="flex gap-4 mt-2">
              <Twitter size={20} className="text-gray-600 hover:text-blue-500 cursor-pointer" />
              <Instagram size={20} className="text-gray-600 hover:text-pink-500 cursor-pointer" />
              <Linkedin size={20} className="text-gray-600 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row justify-around mt-10 text-center">
        {[{ icon: Truck, title: "FREE & FAST DELIVERY", description: "Free delivery for orders over $140" },
          { icon: Headset, title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
          { icon: CheckCircle, title: "MONEY BACK GUARANTEE", description: "We return money within 30 days" }].map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <service.icon size={32} className="text-gray-600" />
            <h1 className="text-lg font-bold mt-2">{service.title}</h1>
            <h3 className="text-gray-600">{service.description}</h3>
          </div>
        ))}
      </div>

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


export default About;