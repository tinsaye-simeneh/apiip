import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://apiip.net/api/check?accessKey=f7af0b2a-efb5-4aa2-a541-c8432c6356ef"
      )
      .then((response) => {
         setData(response.data)
         console.log(response.data)
         })
      .catch((err) => console.log(err));
  }, []);

  return( 
  <div>
        <h1>IP Address</h1>
        <p>{data.ip}</p>
        <h1>Continent</h1>
        <p>{data.continentName}</p>
        <h1>Country Code</h1>
        <p>{data.countryCode}</p>
        <h1>official Country Name</h1>
        <p>{data.officialCountryName}</p>
        <h1>Country Capital</h1>
        <p>{data.regionName}</p>
        <h1>Country Phone Code</h1>
        <p>{data.phoneCode}</p>
        <h1>Country</h1>
        <p>{data.countryName}</p>
        <h1>Latitude</h1>
        <p>{data.latitude}</p>
        <h1>Longitude</h1>
        <p>{data.longitude}</p>
    </div>    
  )
}
