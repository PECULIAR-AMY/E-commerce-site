import { ArrowRight, ArrowLeft, Monitor, Watch, Camera, Headphones, Gamepad2 } from 'lucide-react';
import ShopItem from '../images/shop items.jpg';

const SignUp = () => {
    return (
        <div className='p-6'>
           

            {/* Category Section */}
            <div className='flex gap-12 mt-10'>
                <div className='w-2/3'>
                    <div className='flex items-center justify-between mb-4'>
                        <h1 className='text-2xl font-semibold'>Browse By Category</h1>
                        <div className='flex gap-2'>
                            <ArrowLeft size={24} className='cursor-pointer hover:text-gray-600' />
                            <ArrowRight size={24} className='cursor-pointer hover:text-gray-600' />
                        </div>
                    </div>

                    {/* Category Grid */}
                    <div className=' grid grid-cols-5 gap-6 p-4 rounded-lg shadow-md'>
                        <div className='flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md'>
                            <Monitor size={40} />
                            <span className='mt-2'>Computer</span>
                        </div>
                        <div className='flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md'>
                            <Watch size={40} />
                            <span className='mt-2'>Wrist Watch</span>
                        </div>
                        <div className='flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md'>
                            <Camera size={40} />
                            <span className='mt-2'>Camera</span>
                        </div>
                        <div className='flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md'>
                            <Headphones size={40} />
                            <span className='mt-2'>Headphones</span>
                        </div>
                        <div className='flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md'>
                            <Gamepad2 size={40} />
                            <span className='mt-2'>Gaming</span>
                        </div>
                    </div>
                </div>
                <img src={ShopItem} alt='logo' className='w-1/3 rounded-lg shadow-md' />
            </div>
        </div>
    );
};

export default SignUp;
