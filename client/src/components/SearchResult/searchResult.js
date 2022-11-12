import React from "react";
import getPlaces from "../../api";
import { useState, useEffect } from "react";
 
function SearchResult({Address,keyword,country}) { 
  const [data, setData] = useState([]); 
  const [initfetch, setInitfetch] = useState(false);
  useEffect(() => {
      
  }, [data]);
//   const [results, setResults] = useState([]);

//   console.log(results)

//   useEffect(() => { 
//     setResults(getPlaces("food", ["Radcliffe observatory quater", "St Johns college", "Keble road"], "UK"))
//   }, [results])
  console.log(getPlaces("food", ["Radcliffe observatory quater", "St Johns college", "Keble road"], "UK"))
  return (
    <>
         <button onClick={()=> {
            setData(getPlaces("food", ["Radcliffe observatory quater", "St Johns college", "Keble road"], "UK"))
            setInitfetch(true)
            } } >places</button> 
         
        {/* {initfetch? (data.map((element) => {
            console.log("a")
             
        })):(console.log("a")) */ 
        }
        
    </>
  );
}

export default SearchResult;


// 