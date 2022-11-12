import React from "react";
import ReactDOM from "react-dom/client";
import GoGoMap from "./MainMapBlock";
import Container from "@mui/material/Container";
import ButtonAppBar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container maxWidth="xl">
    <ButtonAppBar />
    <GoGoMap />
  </Container>
);
