import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../Assets/Images/Logo.png";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import FCP from "../Assets/Images/FCP.png";

const Navbar = ({ title }) => {
  return (
    <AppBar sx={{ bgcolor: "#063970" }}>
      <Toolbar>
        <IconButton
          size="large"
          // edge="start"
          color="inherit"
          aria-label="logo"
          p="300px"
          // sx={{ ml: { sm: "250px" } }}
        >
          <img
            src={FCP}
            href="#Tech"
            className="logo"
            position="responsive"
            alt="/"
          />
        </IconButton>

        {title}

        <Stack
          direction="row"
          spacing={2}
          // sx={{ mr: { sm: "250px" }, ml: { sm: "250px" } }}
        >
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
