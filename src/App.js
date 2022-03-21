import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Products, Home, Wishlist, Cart, Login, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";

import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
