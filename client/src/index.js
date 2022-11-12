import React from "react";
import ReactDOM from "react-dom/client";
import SimpleMap from "./MainMapBlock";
import Container from "@mui/material/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container maxWidth="xl">
    <SimpleMap />
  </Container>
);
