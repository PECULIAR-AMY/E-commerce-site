import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/; // Supports 10-15 digit numbers

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone number (10-15 digits)";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Breadcrumb */}
      <div className="mt-6 text-gray-500 text-lg">Home / Contact</div>

      {/* Contact Section */}
      <div className="mt-10 flex gap-16">
        {/* Contact Info */}
        <div className="bg-white p-6 shadow-md rounded-lg w-1/3">
          <div className="mb-6">
            <div className="flex items-center gap-3 text-red-500 font-semibold">
              <Phone size={18} />
              <h3>Call us</h3>
            </div>
            <p className="text-gray-700 mt-2">We are available 24/7, 7 days a week</p>
            <p className="text-gray-700">Phone: +888878456355</p>
          </div>

          <div>
            <div className="flex items-center gap-3 text-red-500 font-semibold">
              <Mail size={18} />
              <h3>Write to us</h3>
            </div>
            <p className="text-gray-700 mt-2">Fill out the form, and we will contact you within 24 hours.</p>
            <p className="text-gray-700">Email: customer@Exclusive.com</p>
            <p className="text-gray-700">Support: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-md rounded-lg flex-1">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Input */}
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Message Input */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 w-full h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
