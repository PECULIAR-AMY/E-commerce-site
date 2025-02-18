import {  Facebook, Instagram, Twitter, Youtube } from "lucide-react";


function Footer() {
    return (
        <div>
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
    )
}

export default Footer;