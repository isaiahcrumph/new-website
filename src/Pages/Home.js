import { Box, ListItemSecondaryAction } from "@mui/material";
import React from "react";
import HeroBanner from "../Components/HeroBanner";

const Home = ({ greetingsText }) => {
  return (
    <Box>
      <HeroBanner greetingsText={greetingsText} />
    </Box>
  );
};

export default Home;
