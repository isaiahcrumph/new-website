import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TechDetail from "./Pages/TechDetail";

const greetingsText = (
  <Typography
    color="white"
    variant="h2"
    sx={{ ml: { lg: "40px", xs: "10px" } }}
  >
    Web <br /> Development Company
  </Typography>
);

const title = (
  <Typography
    variant="h4"
    component="div"
    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
  >
    F.C.P <br />
    Technologies
  </Typography>
);

const App = () => {
  return (
    <Box>
      <Navbar title={title} />
      <Routes>
        <Route path="/" element={<Home greetingsText={greetingsText} />} />
        <Route path="/tech/:id" element={<TechDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
