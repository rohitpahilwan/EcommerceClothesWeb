import React from "react";
import MensKurta from "../../../Data/Mens/MensKurta";
import Product from "../Product/Product";
import { Icon, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@headlessui/react";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md border border-black">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIiQnjp-HqPzumXupRPa4Tg30DJMfxzMrHNkWNVAP-PvksBI73LwfBEgNXP96phAzmSXb3gnFExQtg8cOtualmygvWlhrM4cWO3n19yq0&usqp=CAE"
          />
        </div>
        <div className="ml-5  space-y-1">
          <p className="font-semibold">
            DENIMLOOK Men Relaxed Fit Mid Rise Baggy Light Blue Jeans, Denim
            Look101
          </p>
          <p className="opacity-70">Size:L, White</p>
          <p className="opacity-70 mt-2">Seller:PUMA</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5%Off</p>
          </div>
        </div>
      </div>
      <div>
        <div className="lg-flex items-center lg:space-x-10">
          <div className="flex items-center  space-x-2">
            <IconButton sx={{ color: "RGB(145 85 253)" }}>
              <RemoveCircleIcon />
            </IconButton>
            <span className="py-1  px-7 border rounded-sm">3</span>
            <IconButton sx={{ color: "RGB(145 85 253)" }}>
              <AddCircleIcon />
            </IconButton>
            <div>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-lg shadow-lg transition duration-300 ease-in-out 2 ">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
