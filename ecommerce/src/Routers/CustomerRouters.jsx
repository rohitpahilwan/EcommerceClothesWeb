import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import OrderDeatils from "../customer/components/Order/OrderDeatils";
import Order from "../customer/components/Order/Order";

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/:levelOne/:levelTwo/:levelThree"
            element={<Product />}
          ></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route
            path="/account/order/:orderId"
            element={<OrderDeatils />}
          ></Route>
          {/* <Product /> */}
          {/* <ProductDetails /> */}
          {/* <Checkout /> */}
          {/* <Order /> */}
          {/* <OrderDeatils /> */}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
