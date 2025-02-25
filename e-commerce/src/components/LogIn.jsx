import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageLogo from "../images/shop items.jpg";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [authError, setAuthError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email address.";
        }
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const authenticateUser = () => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        return storedUsers.find(
            (user) => user.email === formData.email && user.password === formData.password
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAuthError("");

        if (validateForm()) {
            const user = authenticateUser();

            if (user) {
                setSuccessMessage("Login successful! Redirecting...");
                navigate("/homepage"); // Redirects immediately after login
            } else {
                setAuthError("Invalid email or password. Please try again.");
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
            <div className="flex flex-col md:flex-row items-center gap-16 mt-12 w-full max-w-6xl bg-white p-8 shadow-lg rounded-xl">
                <img src={ImageLogo} alt="image" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">Log in to Exclusive</h1>
                    <h3 className="text-gray-600 mt-2">Enter your details below</h3>

                    {authError && <p className="text-red-500 text-sm mt-2">{authError}</p>}
                    {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}

                    <form className="mt-6" onSubmit={handleSubmit}>
                        <label className="block mb-4">
                            <span className="text-gray-700">Email:</span>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`border p-3 w-full rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                                }`}
                                placeholder="Your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700">Password:</span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`border p-3 w-full rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                                }`}
                                placeholder="Your password"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
