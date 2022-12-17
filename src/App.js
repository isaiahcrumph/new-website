import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TechDetail from "./Pages/TechDetail";

const greetingsText = (
  <Typography color="white" variant="h2">
    Web <br /> Development Company
  </Typography>
);

const title = "Armoniam";

function App() {
  return (
    <Box>
      <Navbar title={title} />
      <Routes>
        <Route path="/" element={<Home greetingsText={greetingsText} />} />
        <Route path="/tech/:id" element={<TechDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
