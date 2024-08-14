import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Component/Home/Home";
import Signin from "./Component/Authontication/Signin";
import { SIgnup } from "./Component/Authontication/SIgnup";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/Home/About";
import Contact from "./Component/Home/Contact";
import Cart from "./Component/Home/Cart";
import Shop_Category from "./Component/Home/Shop_Category";
import Product from "./Component/Home/Product";
import { useState } from "react";
import Navbar from "./Component/Home/Navbar";
import Notification from "./Component/Home/Notification";
import Checkout from "./Component/Home/Checkout";

function App() {
  const [isItems, setItems] = useState([]);
  const [isCart, setCart] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar setCart={setCart} isCart={isCart} />
        <Routes>
          <Route path="/" element={<Home isCart={isCart} setCart={setCart} />}/>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SIgnup />} />
          <Route path="shop_category" element={
          <Shop_Category setItems={setItems} isItems={isItems} setCart={setCart}/>}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart setCart={setCart} isCart={isCart} />}/>
          <Route path="product" element={<Product  setCart={setCart} setItems={setItems} isItems={isItems}/>} />
          <Route path="checkout" element={<Checkout setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
      <Notification />
    </>
  );
}

export default App;
