import React, { useEffect, useState } from "react";
import "./Maps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import dotenv from "dotenv";

function Maps() {
  const locationIcon = <FontAwesomeIcon icon={faMapLocation} />;
  const [api_key, setApiKey] = useState("");

  const handleClick = () => {
    window.open(
      `https://www.google.com/maps/embed/v1/place?q=Gedung+As+Sakinah+Jl.+KH+Abdullah+Bin+Nuh+No.48,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212&key=${api_key}`
    );
  };

  useEffect(() => {
    const getApiKey = async () => {
      const response = await fetch("/maps"); //kirim permintaan ke server
      const data = await response.json();
      setApiKey(data.api_key); //simpan API key di state
    };
    getApiKey();
  }, []);

  return (
    <div className="maps-wrapper">
      <iframe
        title="Gedung As Sakinah"
        className="maps"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?q=Gedung+As+Sakinah+Jl.+KH+Abdullah+Bin+Nuh+No.48,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212&key=${api_key}`}
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
