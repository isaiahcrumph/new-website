import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../Assets/Images/Logo.png";
import { AppBar, styled, Toolbar, IconButton, Button } from "@mui/material";
import FCP from "../Assets/Images/FCP.png";
import { display } from "@mui/system";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = ({ title }) => {
  return (
    <AppBar
      justifyContent="space-arround"
      position="static"
      sx={{ bgcolor: "#063970" }}
    >
      <StyledToolbar>
        <IconButton
          // size="large"
          // edge="start"
          // color="inherit"
          // aria-label="logo"
          // p="300px"
          // sx={{ ml: { sm: "250px" } }}
          sx={{ transform: "scale(1.3)" }}
        >
          <Link href="#Tech">
            <img
              src={FCP}
              href="#Tech"
              className="logo"
              position="responsive"
              alt="/"
            />
          </Link>
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
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
