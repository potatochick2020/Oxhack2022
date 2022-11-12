import React from "react";
import getPlaces from "../../api";
function SearchResult({Address,keyword,country}) {
  console.log(getPlaces("food", ["Radcliffe observatory quater", "St Johns college", "Keble road"], "UK"))
  return (
    <></>
  );
}

export default SearchResult;


// 