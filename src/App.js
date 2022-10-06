import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/cart";
import Detaile from "./components/Detaile";
import About from "./components/About";
import Defualt from "./components/Defualt";
import AddtoCart from "./components/AddtoCart";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <div className=" ">
        <div className="row">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detaile />} />
          <Route path="/about" element={<About />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="*" element={<Defualt />} />
        </Routes>
        <Modal />
      </div>
    </React.Fragment>
  );
}
export default App;
