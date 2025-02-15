import { useState } from 'react';
import ShopItem from '../images/shop items.jpg';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        let newErrors = {};
        if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
        setFormData({ name: '', email: '', password: '' });
        setErrors({});
    };

    const handleGoogleSignIn = () => {
        console.log('Sign in with Google clicked');
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
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Create Account</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Full Name'
                                value={formData.name}
                                onChange={handleChange}
                                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email Address'
                                value={formData.email}
                                onChange={handleChange}
                                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                                }`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Create Account Button */}
                        <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>
                            Create Account
                        </button>

                        {/* Sign in with Google Button */}
                        <button 
                            type='button' 
                            onClick={handleGoogleSignIn} 
                            className='w-full flex items-center justify-center gap-2 border border-gray-400 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg'
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
                                alt="Google Logo" className="w-5 h-5" 
                            />
                            Sign in with Google
                        </button>

                        {/* Already have an account? Login */}
                        <p className="text-center text-gray-600 mt-4">
                            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
