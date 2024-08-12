import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <div></div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree"></Route>

        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        {/* <OrderDeatils /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
