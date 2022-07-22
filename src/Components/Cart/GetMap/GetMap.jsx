import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { MapStyles } from "./GetMapStyles";
import axios from "axios";
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GetMap = () => {
  const [latLocation, setLatLocation] = useState(false);
  const [lngLocation, setLngLocation] = useState(false);
  useEffect(() => {
    const fetchAsync = async () => {
      const { data } = await axios.get("http://ip-api.com/json");
      console.log(data);
      setLatLocation(Number(data.lat));
      setLngLocation(Number(data.lon));
    };
    fetchAsync();
  }, []);

  const defaultProps = {
    center: {
      lat: latLocation,
      lng: lngLocation,
    },
    zoom: 11,
  };

  return (
    latLocation &&
    lngLocation && (
      <MapStyles>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={latLocation} lng={lngLocation} text="" />
        </GoogleMapReact>
      </MapStyles>
    )
  );
};

export default GetMap;
