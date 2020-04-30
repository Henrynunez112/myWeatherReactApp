import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "./Card";

const WeatherDiv = () => {
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
