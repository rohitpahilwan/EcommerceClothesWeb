import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "violet" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 flex justify-start">
            <div>
              <p className="font-semibold text-lg ">Ram</p>
              <p className="opacity-70">August 10,2024</p>
            </div>
          </div>
          <div className="space-y-2 flex justify-start">
            <Rating value={4.5} name="half-rating" />
          </div>
          <p className="space-y-2 flex justify-start">
            Very Good Product, I Love This Shirt
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
