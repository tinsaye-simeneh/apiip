import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://apiip.net/api/check?accessKey=f7af0b2a-efb5-4aa2-a541-c8432c6356ef"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="p-3 bg-primary border rounded mt-5 text-white">
      <div className="col-md-12 text-center mb-5 bg-danger">
        <h1>IP Address Tracker</h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>My IP Address: {data.ip}</h4> <hr />
          <h4>Continent: {data.continentName}</h4> <hr />
          <h4>Country: {data.countryName}</h4> <hr />
          <h4>Official Country Name: {data.officialCountryName}</h4> <hr />
          <h4>Country Capital: {data.regionName}</h4> <hr />
        </div>
        <div className="col-md-6 bg-primary">
          <h4>Country Phone Code: +{data.phoneCode}</h4> <hr />
          <h4>Country Code: {data.countryCode}</h4> <hr />
          <h4>Latitude: {data.latitude}</h4> <hr />
          <h4>Longitude: {data.longitude}</h4> <hr />
        </div>
      </div>
    </Container>
  );
}
