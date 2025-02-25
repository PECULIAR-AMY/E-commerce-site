import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopItem from "../images/shop items.jpg"; // Ensure correct file name

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};
        if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters long.";
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
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
            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            };

            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            console.log("User signed up successfully:", newUser);
            setSuccessMessage("Signup successful! Redirecting to login...");

            setFormData({ name: "", email: "", password: "" });
            setErrors({});

            setTimeout(() => {
                navigate("/login");
            }, 1500);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="w-1/2">
                    <img src={ShopItem} alt="Shop Items" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Account</h2>
                    {successMessage && <p className="text-green-600">{successMessage}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                            Create Account
                        </button>
                        <p className="text-center text-gray-600 mt-4">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 hover:underline">
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
