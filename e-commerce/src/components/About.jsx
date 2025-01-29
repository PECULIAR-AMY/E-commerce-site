import ImageLogo from '../images/We shop.jpg'
import { Heart, ShoppingCart, User, Twitter, Instagram, Linkedin, Truck, Headset, CheckCircle, Facebook, Youtube} from 'lucide-react'
import Image1 from '../images/standing man 1.jpg'
import Image2 from '../images/Beautiful woman 1.jpg'
import Image3 from '../images/Standing man 2.jpg'

const About = () =>{
return(
    <>
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

    <div className='p-10'>
        <h1>Home/About</h1> 
    </div>

    <h1 className='p-6'>OUR STORY</h1>
    <div className='flex item center'>
        <p className='flex wrap'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. 
            Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers 
            and 300 brands and serves 3 millioons customers across the region. 
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment 
           in categories ranging  from consumer.</p>
           <img src={ImageLogo} alt= 'logo' className=''/>
    </div>

    <div className="grid grid-cols-4 gap-4 p-4 h-50">
      <div className="bg-blue-500 p-4"> </div>
      <div className="bg-red-200 p-4"></div>
      <div className="bg-green-200 p-4"></div>
      <div className="bg-green-200 p-4"></div>
    </div>

      <div className=' flex gap-10'>
        <div>
        <img src= {Image1} alt='image' width={500}/>
        <h1>Tom Cruise</h1>
        <h3>Founder and chairman</h3>
         <div className='flex gap-4'>
            <Twitter  size={20}/>
            <Instagram  size={20}/>
            <Linkedin  size={20}/>
         </div>
        </div>
        <div>
        <img src= {Image2} alt='image' width={500}/>
        <h1>Emma Walt</h1>
        <h3>Managing Director</h3>
         <div className='flex gap-4'>
            <Twitter  size={20}/>
            <Instagram  size={20}/>
            <Linkedin  size={20}/>
         </div>
        </div>
        <div>
        <img src= {Image3} alt='image' width={500}/>
        <h1>Will Smith</h1>
        <h3>Product Manager</h3>
         <div className='flex gap-4'>
            <Twitter  size={20}/>
            <Instagram  size={20}/>
            <Linkedin  size={20}/>
         </div>
        </div>
      </div>
  
     <div className='flex gap-80 mt-10'>
     <div>
            <Truck  size={24}/>
            <h1>FREE & FAST DELIVERY</h1>
            <h3>Free delivery for orders over $140s</h3>
        </div>

        <div>
            <Headset  size={24}/>
            <h1>2/7 CUSTOMER SERVICE</h1>
            <h3>Friendly 2/7 customer support</h3>
        </div>

       < div>
            <CheckCircle  size={24}/>
            <h1>MONEY BACK GUARANTEE</h1>
            <h3>We return money within 30 days</h3>
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
      

    </>
    
);
};


export default About;