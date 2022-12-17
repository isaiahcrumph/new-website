import { Typography, Box, Button } from "@mui/material";
import React from "react";
import HeroBannerImg from "../Assets/Images/HeroBannerImg.png";

const HeroBanner = ({ greetingsText }) => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      {greetingsText}

      <Typography color="white" variant="h5"></Typography>
      <Button />

      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
