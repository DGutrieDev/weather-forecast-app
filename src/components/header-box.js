import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function header({city,setCity,handleSearch}){
  return (
    <div className="weather__header">
      <form className="weather__search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="weather__searchform"
        />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="icon-f"/>
      </form>
      <div className="weather__units">
        <span className="weather_unit_celsius">°C</span>
        <span className="weather_unit_farenheit">°F</span>
      </div>
    </div>
  );
}

export default header;
