import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDeatils = () => {
  return (
    <div className="px-5  lg:px-20 p-5 ">
      <div>
        <h1 className="font-bold text-xl text-left py-1">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-10">
        <OrderTracker />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid className="space-x-5" container>
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border "
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-[5rem] h-[5rem]  object-cover object-top "
                    src="https://m.media-amazon.com/images/I/615KUBYj8GL._SY879_.jpg"
                    alt=""
                  />
                  <div className="text-left">
                    <p className="font-semibold">
                      DHRUVI TRENDZ Men Pajama Set
                    </p>
                    <p className="space-x-5 opacity-50 text-xs font-semibold">
                      <span>Color:pink</span>
                      <span>Size:M</span>
                    </p>
                    <p>Seller: DHRUVI TRENDZ</p>
                    <p className="text-green-600">₹449</p>
                  </div>
                </div>
              </Grid>

              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorderIcon
                    sx={{ fontSize: "2rem", color: "black" }}
                    className="px-2 "
                  />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDeatils;
