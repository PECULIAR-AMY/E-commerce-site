 import HomePage from './components/HomePage';
 import Login from './components/LogIn';
 import About from './components/About'
// import CheckOut from "./components/CheckOut";
// import Cart from './components/Cart'
// import Account from "./components/AccountDopdown";
// import Contact from './components/Contact';
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App"> 
     <Router>
     <div>
      <Link to='/'> Home</Link>
      <Link to='/Login'> Login</Link>
      <Link to='/About'> About</Link>
     </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route  path='/Login' element = {<Login />}/>
        <Route  path='/About' element = {<About />}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App;
