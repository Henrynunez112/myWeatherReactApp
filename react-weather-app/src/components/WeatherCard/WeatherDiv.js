import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import assetMapping from "../../assets/assetMapping.json";
import Header from "../Header/Header";
import axios from "axios";

const WeatherDiv = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({ temperature: "", description: "" });
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    const API_KEY = "3382429b47bd7f5f9290fad35b01287d";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const URL = API_URL + `?q=${search}&appid=${API_KEY}&units=metric`;
    try {
      const res = await axios.get(URL);
      debugger
      if (res.data.cod === 200) {
        setWeather({
          ...weather,
          description: res.data.weather[0].main,
          temperature: res.data.main.temp,
        });
      } else {
        throw res.data.cod;
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="">
      <Header
        color={
          assetMapping.colors[error === true ? "error" : weather.description]
        }
      />
      <main>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleClick}>Search</button>
        {weather.temperature && weather.description !== "" ? (
          <WeatherDetails weather={weather} />
        ) : null}
      </main>
    </div>
  );
};

export default WeatherDiv;
