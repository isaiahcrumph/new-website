import { Typography, Box, Button } from "@mui/material";
import React from "react";
import HeroBannerImg from "../Assets/Images/HeroBannerImg.png";

const HeroBanner = ({ greetingsText }) => {
  return (
    <Box
      src={greetingsText}
      sx={{ mt: { lg: "212px", xs: "200px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      {greetingsText}

      <Typography color="white" variant="h5"></Typography>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
        sx={{
          mt: { lg: "20px", xs: "10px" },
          ml: { lg: "40px", xs: "10px" },
          bgcolor: "#063970",
        }}
        position="responsive"
      >
        Projects
      </Button>

      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
