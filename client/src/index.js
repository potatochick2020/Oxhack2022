import React from "react";
import ReactDOM from "react-dom/client";
import MarkersMap from "./components/Map/MarkersMap";
import ButtonAppBar from "./components/Navbar/Navbar";

import Grid from "@mui/material/Grid";
import SearchResult from "./components/SearchResult/searchResult";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ButtonAppBar />

    <Grid container>
      <Grid item xs={8}>
        <MarkersMap />
      </Grid>
      <Grid item xs={4} style={{ backgroundColor: "White" }}>
        <SearchResult
          Address={"food"}
          keyword={[
            "Radcliffe observatory quater",
            "St Johns college",
            "Keble road",
          ]}
          country={"UK"}
        />
      </Grid>
    </Grid>
  </>
);
