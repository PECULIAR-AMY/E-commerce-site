
import { Heart, ShoppingCart, User, ArrowRight, ArrowLeft} from 'lucide-react'
import ShopItem from '../images/shop items.jpg'
const SignUp = () =>{
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

    <div className='flex gap-120'>
    <div>
    <div className='flex  gap-10 mt-40'>
        <h1 className=''>Browse By Category</h1>
         <ArrowLeft size={24} />
         <ArrowRight />
    </div>

    <div className="grid grid-cols-4 gap-4 p-4 border-color-grey mt-10 h-50 w-170">
    <div className="bg-blue-500 p-4"> </div>
      <div className="bg-red-200 p-4"></div>
      <div className="bg-green-200 p-4"></div>
      <div className="bg-green-200 p-4"></div>  
    </div>
    </div>
    <img  src={ShopItem} alt='logo' className='' />
    </div>
        </div>
    )
}

export default SignUp;