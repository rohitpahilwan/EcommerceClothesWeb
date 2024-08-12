import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=1");
  };
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-3 lg:px-16 realtive text-left">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((items) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h[100vh] mt-5 lg:mt-0">
          <div className="border  border border-black rounded-md">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr className="border-t-2 border-gray-300 py-1" />

            {/* <hr className="w-full border-t-2 border-gray-300 mb-4" /> */}
            <div className="space-y-3 font-semibold ">
              <div className="flex justify-between pt-3 text-black">
                <span>price</span>
                <span>₹1999</span>
              </div>
              <div className="flex justify-between pt-0 ">
                <span>Discount</span>
                <span className="text-green-600">-₹123</span>
              </div>
              <div className="flex justify-between py-1 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">free</span>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 " />

            <div className="flex justify-between pt-3 text-black py-4">
              <span className="font-bold">Total Amount</span>
              <span className="text-green-600">₹1876</span>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 py-1 " />

          <button
            onClick={handleCheckout}
            className="bg-violet-700 hover:bg-violet-500 text-white font-bold py-1 px-1 rounded-lg shadow-lg transition duration-300 ease-in-out pb-1 w-full"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
