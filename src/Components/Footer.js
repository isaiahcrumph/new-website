import { Box, Grid, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spaceing={5}></Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}> Help</Box>
            <Box>
              <Link href="/" color="inherit">
                Home
              </Link>
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
