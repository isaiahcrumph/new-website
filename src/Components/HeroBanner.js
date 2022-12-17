import { Typography, Box, Button } from "@mui/material";
import React from "react";
import HeroBannerImg from "../Assets/Images/HeroBannerImg.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "250px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="white" variant="h2">
        Prem Web-Dev for Pros
      </Typography>
      <Typography color="white" variant="h5">
        Look at our work
      </Typography>
      <Button />

      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
