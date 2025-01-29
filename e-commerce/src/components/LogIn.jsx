import { Heart, ShoppingCart, User } from 'lucide-react'
import ImageLogo from '../images/shop items.jpg'
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react'
const Login = () => {
    return (
   <div>
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

    <div className='flex mt-10 mb-100 gap-40'>
        <img src= {ImageLogo} alt= 'image' />
        <div>
        <h1>Log in to Exclusive </h1>
        <h3>Enter your details below</h3>
        <form className="p-4 max-w-md mx-auto ">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          className="border p-2 w-full mb-4"
          placeholder="Your name"
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          className="border p-2 w-full mb-4"
          placeholder="Your email"
        />
      </label>
      <label className="block mb-2">
        Message:
        <textarea
          name="message"
          className="border p-2 w-full mb-4"
          placeholder="Your message"
        />
      </label>
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        LogIn 
      </button>
      <button className='bg-white text-black px-4 py-2 rounded hover: bg-red'> 
       Forgotten password? 
      </button>
    </form>
        </div>
    </div>

    <div className='flex items-center justify-between gap-4 bg-black text-white h-50 mt-50'>
        <div className=''>
         <h2>Exclusive</h2>
         <h3>subscribe</h3>
         <h3>get 10% off your first order</h3>
         <button className='bg-white text-black'>
            Enter your email
         </button>
        </div>
        <div className=''>
         <h2>Support</h2>
         <h3>111 Bjoy sarani dhaka Dh 1515, Bangladesh</h3>
         <h3>get 10% off your first order</h3>
         <p>exclusive@gmail.com</p>
         <h1>+ 4566787897832</h1>
        </div>
        <div className=''>
         <h2>Account</h2>
         <h3>My Account</h3>
         <h3>Login/Register</h3>
         <h3>Cart</h3>
         <h3>Wishlist</h3>
         <h3>Shop</h3>
        </div>
        <div className=''>
         <h2>Quick link</h2>
         <h3>Privacy Policy</h3>
         <h3>Terms of use</h3>
         <h3>FAQ</h3>
         <h3>Contact</h3>
        </div>
        <div className=''>
         <h2>Download App</h2>
         <h3>Save s3 with App new look</h3>
         <div className='flex gap-5'> 
        <Instagram />
         <Facebook />
         <Twitter />
         <Youtube />
         </div>
        </div>
        <div>

        </div>
    </div>

   </div>
    )
}


export default Login; 