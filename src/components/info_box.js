import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function info_box({weather,unit}) {
  return (
    <div className="weather__info">
      <div className="weather__card">
        <FontAwesomeIcon icon="fa-solid fa-temperature-full" className="icon-f"/>
        <div>
          <p>Real Feel</p>
          <p className="weather__realfeel">{weather.main.feels_like} °</p>
        </div>
      </div>
      <div className="weather__card">
        <FontAwesomeIcon icon="fa-solid fa-droplet" className="icon-f"/>
        <div>
          <p>Humidity</p>
          <p className="weather__humidity">{weather.main.humidity} %</p>
        </div>
      </div>
      <div className="weather__card">
        <FontAwesomeIcon icon="fa-solid fa-wind" className="icon-f"/>
        <div>
          <p>Wind</p>
          <p className="weather__wind">{weather.wind.speed} {unit === "imperial" ? "mph" : "m/s"}</p>
        </div>
      </div>
      <div className="weather__card">
        <FontAwesomeIcon icon="fa-solid fa-gauge-high" className="icon-f"/>
        <div>
          <p>Pressure</p>
          <p className="weather__pressure">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default info_box;
