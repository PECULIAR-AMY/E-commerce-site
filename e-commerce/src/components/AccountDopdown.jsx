import { Heart, ShoppingCart, User} from 'lucide-react'


const Account = () => {
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

    <div className='flex gap-100'>
    <div className='p-10'>
        <h1>Home/Account</h1> 
    </div>
    <div className='p-10'>
        <p>
            welcome!<span className='text-red-500'>Rime</span>
            </p>
    </div>
    </div>

   <div className='flex'>
   <div className='mb-2'>
        <h1 className='block'>Manage My Account</h1>
    </div>

    <div className=''>
        <div>
            <form>
                <div>
                <label className='text-red-500 block'>My Profile</label>
                <input  
                placeholder='Address Book'
                type= 'text'
                />
                </div>

                <div>
                <input  
                placeholder='Payment Option'
                type= 'text'
                />
                </div>
            </form>

            <form className='mt-4'>
                <div>
                <label className='text-bold block'>My Order</label>
                <input  
                placeholder='My returns'
                type= 'text'
                />
                </div>

                <div>
                <input  
                placeholder='My Cancellations'
                type= 'text'
                />
                </div>
            </form>
            <p className='mt-8'> MY WISH LIST</p>
        </div>   
    </div>
    <p className='text-red-500' > Edit your Profile </p>
    <div className='flex gap-20' >
    <div>
        <form>
            <label className='block'>First Name</label>
            <input 
            placeholder='Md '
            type='text'
            />
        </form>
        <form>
            <label className='block'>Email</label>
            <input 
            placeholder='emmanuel@gmail.com '
            type='email'
            />
        </form>
    </div>
    <div>
        <form>
           <label>Last Name</label>
           <input 
           type='text'
           placeholder='remark'
           /> 
        </form>
        <form>
           <label>Add Address</label>
           <input 
           type='text'
           placeholder='16 odubajjo Shomolu'
           /> 
        </form>
    </div>
    </div>
    <p>password Change</p>
    <div>
        <form>
        <label>Add Address</label>
           <input 
           type='text'
           placeholder='16 odubajjo Shomolu'
           /> 
        </form>
        <form>
        <label>Add Address</label>
           <input 
           type='text'
           placeholder='16 odubajjo Shomolu'
           /> 
        </form>
    </div>
    
   </div>
  </div>
    )
};

export default Account;