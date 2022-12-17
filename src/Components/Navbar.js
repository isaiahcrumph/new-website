import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../Assets/Images/Logo.png";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import FCP from "../Assets/Images/FCP.png";

const Navbar = ({ title }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#000" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          p="300px"
          sx={{ ml: { sm: "250px" } }}
        >
          <img src={Logo} className="logo" />
        </IconButton>
        <Typography
          src={title}
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        <Link href="#Tech">
          <img src={FCP} className="logo" />
        </Link>
        <Stack direction="row" spacing={2} sx={{ mr: { sm: "250px" } }}>
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
