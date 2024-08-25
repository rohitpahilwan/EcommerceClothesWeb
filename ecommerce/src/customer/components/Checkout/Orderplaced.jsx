import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const OrderPlaced = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  var x = 1;

  return (
    <div className="container mx-auto px-4 py-10">
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 4,
          border: "1px solid #dcdcdc",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Order Placed Successfully!
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for your purchase! Your order has been successfully placed.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (
            (window.location.href = `/account/order/${x}`), (x = x + 1)
          )}
          sx={{ marginTop: 2 }}
        >
          Go To My Orders
        </Button>
      </Box>
    </div>
  );
};

export default OrderPlaced;
