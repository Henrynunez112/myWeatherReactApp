import React from 'react';
import Description from '../WeatherDetails/Description/Description'
import Temperature from '../WeatherDetails/Temperature/Temperature'

const WeatherDetails = (props) =>{
    return(
        <div className='weather card'>
            <Description>{props.weather.description}</Description>
            <Temperature>{props.weather.temperature}</Temperature>
        </div>
    )
};
export default WeatherDetails;