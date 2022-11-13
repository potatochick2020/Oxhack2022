import React from "react";
import getPlaces from "../../api";
import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SearchResult({ Address, keyword, country }) {
  const [data, setData] = useState([]);

  const data_places = getPlaces(Address, keyword, country);

  // change promise object to array
  useEffect(() => {
    data_places.then((data) => {
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    // print out the data

    <div class="scroll">
      <Box sx={{ width: "100%" }}>
        <Stack>
          {data.map(function (item, index) {
            return (
              <div key={index}>
                <Item>
                  <h3>{item.name}</h3>
                  <p>{item.formatted_address}</p>
                </Item>
              </div>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
}

export default SearchResult;

//
