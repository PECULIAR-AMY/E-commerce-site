import { Heart, ShoppingCart, User} from 'lucide-react'

const Cart = ()=>{
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

    <div className='flex gap-300'>
    <div className='p-10'>
        <h1>WishList()</h1> 
    </div>
    <button className=''>Move All to Bag</button>
    </div>
   </div>
    );
};

export default Cart;