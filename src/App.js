import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/Home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Newnav/>
      <Routes>
        <Route path="/" element ={<Maincomp/>}/>
        <Route path="/login" element ={<Sign_in/>}/>
        <Route path="/Register" element ={<Sign_up/>}/>
        <Route path="/getproductsone/:id" element={<Cart />}/>
        <Route path="/buynow" element={<Buynow />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
