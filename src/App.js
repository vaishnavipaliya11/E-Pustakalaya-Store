import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Products, Home, Wishlist, Cart, Login, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useParams} from 'react-router-dom'
import Mockman from "mockman-js";
import { SingleProduct } from "./pages/singleproduct/SingleProduct";
import { Toaster } from "react-hot-toast";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { Checkout } from "./pages/Checkout/Checkout";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/singleproduct/:product_id" element= {<SingleProduct/>}/>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
