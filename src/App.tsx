import React from "react";

import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <Header />
      <Content />
    </Box>
  );
}

export default App;
