import React from "react";
import ReactDOM from "react-dom/client";
import GoGoMap from "./MainMapBlock";
import Container from "@mui/material/Container";
import ButtonAppBar from "./components/Navbar/Navbar";
 
import Grid from "@mui/material/Grid";
import SearchResult from "./components/SearchResult/searchResult";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ButtonAppBar />
    <Grid container spacing={2}>
      <Grid item xs={8} style={{height:"200px"}}>
        <GoGoMap />
      </Grid>
      <Grid item xs={4} style={{backgroundColor:"Black"}}>
        <SearchResult Address={"a"} keyword={"a"} country={"a"} />
      </Grid>
    </Grid>
  </>
  // <Container maxWidth="xl">
  //
  //
  // </Container>
);
