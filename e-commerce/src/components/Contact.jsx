import { Phone, Mail } from 'lucide-react';

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
    </div>
  );
};

export default Contact;
