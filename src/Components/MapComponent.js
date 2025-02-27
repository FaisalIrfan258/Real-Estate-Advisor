import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, 
  lng: -122.4194, 
};

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (

    <div style={{ width: "100%", borderRadius: "10px", overflow: "hidden" , paddingLeft : "10px"}}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.96305791550465!3d-37.8142179797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb8d6e63b0382d7b3!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1616939301196!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
};

export default MapComponent;
