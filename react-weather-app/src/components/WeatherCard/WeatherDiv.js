import React, {useState, useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../../elements/Card";
import axios from 'axios';

const WeatherDiv = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({temperature: null, description: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <main>
      <Header />
      <SearchBar />
      <Card />
      <Footer />
    </main>
  );
};

export default WeatherDiv;
