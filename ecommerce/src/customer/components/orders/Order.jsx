import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../Redux/Customers/Order/Action";

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { orders } = useSelector((store) => store.order); // Adjusted to match the expected structure

  useEffect(() => {
    if (jwt) {
      dispatch(getOrderHistory({ jwt }));
    }
  }, [dispatch, jwt]);

  // Debugging: Check if orders data is being fetched correctly
  console.log("Fetched Orders: ", orders);

  return (
    <Box className="px-10">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} md={9}>
          <Box className="space-y-5">
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <React.Fragment key={order.id}>
                  {" "}
                  {/* Assuming each order has a unique id */}
                  {order.orderItems.map((item) => (
                    <OrderCard key={item.id} item={item} order={order} />
                  ))}
                </React.Fragment>
              ))
            ) : (
              <p>No orders found.</p>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;
