  import HomePage from './components/HomePage';
 import Login from './components/LogIn';
 import About from './components/About'
 import Category from './components/Category'
 import CheckOut from "./components/CheckOut";
 import Cart from './components/Cart'
import Account from "./components/AccountDopdown";
 import Contact from './components/Contact';
 import ProductDetail from './components/ProductDetails.jsx'
 import SignUp from './components/SignUp.jsx'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
