import { Box, Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box
        position="relative"
        bottom={0}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        elevation={3}
      >
        <Container maxWidth="lg">
          <Grid container spaceing={5}></Grid>
          <Grid item xs={12} sm={4}>
            <Box borderTop={1} borderColor="#fff">
              <Link href="/" color="#fff" variant="h4" sx={{ mr: "20px" }}>
                Home
              </Link>

              <Link href="/" color="#fff" variant="h4">
                Help
              </Link>
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
