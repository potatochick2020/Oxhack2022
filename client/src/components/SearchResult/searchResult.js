import React from "react";
import getPlaces from "../../api";
import { useState, useEffect } from "react";

function SearchResult({ Address, keyword, country }) {
  const [data, setData] = useState([]);

  const data_places = getPlaces(
    Address,
    keyword,
    country 
  );

  // change promise object to array
  useEffect(() => {
    data_places.then((data) => {
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    // print out the data
    <div>
      {data.map(function (item, index) {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.formatted_address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;

//
