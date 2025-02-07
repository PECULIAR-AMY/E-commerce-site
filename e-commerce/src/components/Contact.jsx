import { Phone, Mail } from 'lucide-react';
import { Instagram,Facebook, Youtube,Twitter } from 'lucide-react';

const Contact = () => {
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
          <form className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border p-2 w-full h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Send Message</button>
          </form>
        </div>
      </div>
    
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

export default Contact;
