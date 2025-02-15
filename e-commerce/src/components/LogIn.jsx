import { useState } from 'react';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import ImageLogo from '../images/shop items.jpg';
import  { useNavigate } from 'react-router-dom'


const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long.';
        }

        const emailPhoneRegex = /^([\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|[0-9]{10,15})$/;
        if (!emailPhoneRegex.test(formData.contact)) {
            newErrors.contact = 'Enter a valid email or phone number.';
        }

        if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long.';
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
            setFormData({ name: '', contact: '', message: '' });
            setErrors({});
        }
    };

    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
            {/* Login Section */}
            <div className="flex flex-col md:flex-row items-center gap-16 mt-12 w-full max-w-6xl bg-white p-8 shadow-lg rounded-xl">
                <img src={ImageLogo} alt="image" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">Log in to Exclusive</h1>
                    <h3 className="text-gray-600 mt-2">Enter your details below</h3>

                    <form className="mt-6" onSubmit={handleSubmit}>
                        <label className="block mb-4">
                            <span className="text-gray-700">Name:</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`border p-3 w-full rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                                }`}
                                placeholder="Your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700">Email or phone number:</span>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className={`border p-3 w-full rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.contact ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                                }`}
                                placeholder="Your email or phone number"
                            />
                            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700">Message:</span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`border p-3 w-full rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                                }`}
                                placeholder="Your message"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </label>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Log In
                            </button>
                            <button  
                             onClick ={() => navigate('/ResetPassword')}
                            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">
                                Forgotten password?
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
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

export default Login;
