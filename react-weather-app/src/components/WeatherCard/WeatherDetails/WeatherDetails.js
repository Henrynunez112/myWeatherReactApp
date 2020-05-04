import React from "react";
import Conversion from '../../../elements/Conversion'
import Description from "../WeatherDetails/Description/Description";
import Temperature from "../WeatherDetails/Temperature/Temperature";

const WeatherDetails = (props) => {
  debugger
  const convert = () => {
    let farenheit = Number(props.data.temperature);
    return (farenheit * 9) / 5 + 32;
  };

  return (
    <div className="weather card">
      <Description>{props.data.description}</Description>
      <Temperature>{props.data.temperature}</Temperature>
      <Conversion name='conversion' type='submit' onClick={convert}/>
    </div>
  );
};
export default WeatherDetails;
