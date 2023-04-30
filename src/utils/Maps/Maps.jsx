import React, { useEffect, useState } from "react";
import "./Maps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Maps() {
  const locationIcon = <FontAwesomeIcon icon={faMapLocation} />;
  const [apiKey, setApiKey] = useState("");

  const handleClick = () => {
    window.open(
      `https://www.google.com/maps/embed/v1/place?q=Gedung+As+Sakinah+Jl.+KH+Abdullah+Bin+Nuh+No.48,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212&key=${apiKey}`
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
      <iframe
        title="Gedung As Sakinah"
        className="maps"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?q=Gedung+As+Sakinah+Jl.+KH+Abdullah+Bin+Nuh+No.48,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212&key=${apiKey}`}
        allowFullScreen
      ></iframe>
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
