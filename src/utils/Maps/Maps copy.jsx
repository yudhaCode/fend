import React, { useEffect, useState } from "react";
import "./Maps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import maps from "../../../src/images/maps.png";

function Maps() {
  const locationIcon = <FontAwesomeIcon icon={faMapLocation} />;
  const [apiKey, setApiKey] = useState("");

  const handleClick = () => {
    window.open(
      `https://www.google.com/maps/place/Gedung+Serbaguna+Assakinah/@-6.8213107,107.1257286,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6852eb0633cfb1:0x198e8894ff7d3d3!8m2!3d-6.8213107!4d107.1283035!16s%2Fg%2F1pzv7495m`
    );
  };

  useEffect(() => {
    axios
      .get("https://backend-iota-fawn.vercel.app/maps")
      .then((response) => {
        setApiKey(response.data.api_key);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(apiKey);

  return (
    <div className="maps-wrapper">
      <img className="maps" src={maps} alt="maps" />

      <h3 className="maps-title">Gedung Assakinah</h3>
      <p className="maps-location-desc">
        Jl. KH Abdullah Bin Nuh No.48, Sawah Gede, Kec. Cianjur, Kabupaten
        Cianjur, Jawa Barat 43212
      </p>
      <div className="v1-button-wrapper">
        <button className="button-reset" onClick={handleClick}>
          {locationIcon} Buka Maps
        </button>
      </div>
    </div>
  );
}

export default Maps;
