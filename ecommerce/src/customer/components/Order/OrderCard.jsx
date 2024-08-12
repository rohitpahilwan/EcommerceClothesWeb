import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="text-left p-5 shadow-lg hover:shadow-2xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://i.pinimg.com/originals/bf/f2/9e/bff29eb4d486a1eff7c7454a328777f9.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className=""> Men Slim Mid Rise White Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹199</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on August 12</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span className="text:sm">Your item has been Delivered </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
