import React from "react";
import OpenWeather from "./totalAPI/OpenWeather";
import Unsplash from "./totalAPI/Unsplash";

const API = () => {
  return (
    <div className="API">
      <h3>API</h3>
      <hr />
      <OpenWeather />
      <hr />
      <Unsplash />
    </div>
  );
};

export default API;
