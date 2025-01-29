import { Heart, ShoppingCart, User, Phone, Mail} from 'lucide-react'


const Contact = () => {
    return(
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

    <div className='p-10'>
        <h1>Home/Contact</h1> 
    </div>
   <div className='flex gap-20'>
  
   <div className=' border-1 pl-4 ' >
   <div className='mt-5'>
   <div className='flex gap-4'>
    <Phone enableBackground={onabort} color = 'red'size={15}/>
    <h3>Call us</h3>
   </div>
   <h1>We are available 2/7, 7 days a week</h1>
   <p>Phone : + 888878456355</p>
   </div>

   <div className='mt-8'>
   <div className='flex gap-4'>
    <Mail enableBackground={onabort} color = 'red'size={15}/>
    <h3>write to us</h3>
   </div>
   <h1>Fill out form and we will contact you in 24hrs</h1>
   <p>Email:customer@Exclusive.com</p>
   <p>Emails:support@exclusive.com</p>
   </div>
   </div>

   <div >
    <form className='flex gap-5'>
      <div> 
       <input 
       type= 'text'
       name= 'name'
       placeholder='Enter Name'
        className='border-1 mt-2'/>
      </div>
       
       <div>
        <input 
        type='text'
        name='name'
        placeholder='Your Email'
        className='border-1 mt-2' />
       </div>

       <div>
        <input 
         type='text'
         name='name'
         placeholder='Your phone'
         className='border-1 mt-2'/>
       </div>
     </form>
   <div>
    <input 
    type='text'
    name='name'
    placeholder='Your Message'
     className='mt-2 border-1 w-147 h-95'/>
   </div>
   <button className=''>Send Message</button>
   </div>
   </div>
    
   </div>
    );
};

export default Contact;