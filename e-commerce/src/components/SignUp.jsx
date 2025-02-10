import { useState } from 'react';
import ShopItem from '../images/shop items.jpg';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
            <div className='w-full max-w-4xl flex bg-white shadow-lg rounded-2xl overflow-hidden'>
                {/* Image Section */}
                <div className='w-1/2'>
                    <img src={ShopItem} alt='Shop Items' className='w-full h-full object-cover' />
                </div>

                {/* Sign-Up Form */}
                <div className='w-1/2 p-6 flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Sign Up</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Full Name'
                            value={formData.name}
                            onChange={handleChange}
                            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            value={formData.email}
                            onChange={handleChange}
                            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                        <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>
                            LogIn
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
