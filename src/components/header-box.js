import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function header({city,setCity,handleSearch,toggleA,toggleB}){
  return (
    <div className="weather__header">
      <form className="weather__search" action="">
        <input
          type="text"
          placeholder="London,GB"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather__searchform"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setCity(e.target.value);
              handleSearch();
            }
          }}
        />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="icon-f"/>
      </form>
      <div className="weather__units">
        <span className="weather_unit_celsius" onClick={toggleA}>°C</span>
        <span className="weather_unit_farenheit" onClick={toggleB}>°F</span>
      </div>
    </div>
  );
}



export default header;
