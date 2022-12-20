import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../Components/HeroBanner";
import Technologies from "../Components/Technologies";

const Home = ({ greetingsText }) => {
  return (
    <Box>
      <HeroBanner greetingsText={greetingsText} />
      <Technologies />
    </Box>
  );
};

export default Home;
