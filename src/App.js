import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroBanner from "./Components/HeroBanner";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TechDetail from "./Pages/TechDetail";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech/:id" element={<TechDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
