import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      streetaddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      Phone: data.get("phone"),
    };
    console.log("address", address);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Box
            className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll"
            sx={{ bgcolor: "#fff" }} // Set background color to white for better readability
          >
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard />
              <Button
                sx={{ mt: 2, bgcolor: "rgb(145, 85, 253)", color: "#fff" }}
                size="large"
                variant="contained"
              >
                Deliver Here
              </Button>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="address-line1"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="ZIP/Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                    type="tel"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ mt: 3, bgcolor: "rgb(145, 85, 253)", color: "#fff" }}
                size="large"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
