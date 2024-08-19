import { Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-4 text-center"
      container
      color={"white"}
      sx={{ bgcolor: "black", color: "white" }}
    >
      <Grid className="pt-4 pb-4" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; WardrobeWave: Your Digital Fashion Store
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
