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
          <h4>Region Name: {data.regionName}</h4> <hr />
          <h4>Country: {data.countryName}</h4> <hr />
          <h4> Country Capital: {data.capital}</h4> <hr/>
          <h4>Continent: {data.continentName}</h4> <hr />
          <h4>Official Country Name: {data.officialCountryName}</h4> <hr />
        </div>
        <div className="col-md-6 bg-primary">
          <h4>Country Phone Code: +{data.phoneCode}</h4> <hr />
          <h4>Country Code: {data.countryCode}</h4> <hr />
          <h4>Latitude: {data.latitude}</h4> <hr />
          <h4>Longitude: {data.longitude}</h4> <hr />
          <h4>Postal Code: {data.postalCode}</h4> <hr />
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-md-12">
          Developed By{" "}
          <a
            href="https://github.com/tinsaye-simeneh"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            Tinsaye Simeneh
          </a>{" "}
          By using
          <a
            href="https://apiip.net/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            {" "}
            apip API
          </a>
        </div>
      </div>
    </Container>
  );
}
