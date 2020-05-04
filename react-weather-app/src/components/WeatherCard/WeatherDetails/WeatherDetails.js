import React from "react";
import Description from "../WeatherDetails/Description/Description";
import Temperature from "../WeatherDetails/Temperature/Temperature";

const WeatherDetails = (props) => {
  return (
    <div className="weather card">
      <Description>{props.data.description}</Description>
      <Temperature>{props.data.temperature}</Temperature>
    </div>
  );
};
export default WeatherDetails;
