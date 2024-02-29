import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import HeaderContent from "./components/header-box.js";
import BodyContent from "./components/body_box.js";
import InfoContent from "./components/info_box.js";



function App() {
  const API_key = process.env.REACT_APP_API_KEY;
  const [unit, setUnit] = useState('metric');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const weather_response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API_key}&units=${unit}`
      );
      weather_response.data.weather[0].description = weather_response.data.weather[0].description.toUpperCase();
      setWeather(weather_response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDataCelsius = async () => {
      const newUnit = 'metric';
      setUnit(newUnit)
      handleSearch();
  };

  const toggleDataFarenheit = async () => {
      const newUnit = 'imperial'; // Cambiamos la unidad a imperial
      setUnit(newUnit); // Actualizamos el estado de la unidad
      handleSearch();
  };

  return (
    <div className="container">
      <HeaderContent
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        toggleA={toggleDataCelsius}
        toggleB={toggleDataFarenheit}
      />
      <div className="content_main">
        {weather && (
          <BodyContent
            weather={weather}
            icon={weather.weather[0].icon}
            timestamp={weather.dt}
            timezone={weather.timezone}
          ></BodyContent>
        )}
        {weather && <InfoContent weather={weather} unit={unit}></InfoContent>}
      </div>
    </div>
  );
}

export default App;
