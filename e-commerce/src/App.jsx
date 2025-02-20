import HomePage from './components/HomePage';
import LogIn from './components/LogIn.jsx'; // Ensure the correct filename casing
import About from './components/About';
import Category from './components/Category';
import CheckOut from "./components/CheckOut";
import Cart from './components/CartPage.jsx';
import AccountDopdown from './components/AccountDopdown.jsx'
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetails.jsx';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ResetPassword from './components/ResetPassword.jsx';
import Footer from './components/Footer.jsx'; // Added Footer import
import WomenCategory from './components/WomensCategory.jsx';
import MensFashion from './components/MensFashion.jsx';
import HomeLifestyle from './components/HomeLifestyle.jsx'
import Sunglasses from './components/Sunglasses.jsx'
import Fragrances from './components/Fragrances.jsx';
import Groceries from './components/Groceries.jsx';
import BeautyLifestyle from './components/BeautyLifestyle.jsx';
import Gadgets from './components/Gadgets.jsx';


function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/accountDopdown" element={<AccountDopdown />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reset-password" element={<ResetPassword />} /> {/* Changed URL to lowercase */}
            <Route path="/women-category" element={<WomenCategory />} />
            <Route path="/men-fashion" element={<MensFashion />} />
            <Route path="/home-lifestyle" element={<HomeLifestyle />} />
            <Route path="/sunglasses" element={<Sunglasses />} />
            <Route path="/fragrances" element={<Fragrances />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/beautylifestyle" element={<BeautyLifestyle />} />
            <Route path="/gadgets" element={<Gadgets />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
