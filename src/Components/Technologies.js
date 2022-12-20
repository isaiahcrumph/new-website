import { Box, Button, Typography, Stack, TextField } from "@mui/material";
import React from "react";
import Logo from "../Assets/Images/Logo.png";

import HeroBannerImg from "../Assets/Images/HeroBannerImg.png";

const Technologies = () => {
  return (
    <Stack
      alignItems="center"
      mt="80px"
      justifyContent="center"
      p="300px"
      color="white"
    >
      <Typography variant="h3">
        Awsome Projects you <br />
        should see
      </Typography>
      <img src={Logo} />
    </Stack>
  );
};

export default Technologies;
