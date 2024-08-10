import { Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Grid
      container
      sx={{ bgcolor: "black", color: "white", py: 3 }}
      alignItems="center"
      justifyContent="center"
      spacing={2}
      className="footer-container"
    >
      <Grid item xs={12} textAlign="center">
        <Typography className="pb-5" variant="h6">
          Company
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <Button className="pb-5" variant="contained" color="secondary">
              About
            </Button>
          </Grid>
          <Grid item>
            <Button className="pb-5" variant="contained" color="secondary">
              Blog
            </Button>
          </Grid>
          <Grid item>
            <Button className="pb-5" variant="contained" color="secondary">
              Press
            </Button>
          </Grid>
          <Grid item>
            <Button className="pb-5" variant="contained" color="secondary">
              Jobs
            </Button>
          </Grid>
          <Grid item>
            <Button className="pb-5" variant="contained" color="secondary">
              Partners
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Typography variant="body2" textAlign="center">
          &copy;2024 ClothesShop. All Rights Reserved. Made with Love by Me
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
