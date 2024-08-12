import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import Cart from "../Cart/Cart";

const OrderSummary = () => {
  return (
    <div>
      <div className="py-5 shadow-lg rounded-s-md border border-black rounded-md">
        <AddressCard />
        <Cart />
      </div>
    </div>
  );
};

export default OrderSummary;
