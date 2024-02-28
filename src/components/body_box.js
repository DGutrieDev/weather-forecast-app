import React from "react";

function body_box({weather,icon,timestamp,timezone}) {
  return (
    <div className="weather__body">
      <h1 className="weather__city">{weather.name} , {weather.sys.country}</h1>
      <div className="weather__datetime">{convertTimeStamp(timestamp,timezone)}</div>
      <div className="weather__forecast">
        <p>{weather.weather[0].description}</p>
      </div>
      <div className="weather__icon">
        <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt=""/>
      </div>
      <p className="weather__temperature">{weather.main.temp} °</p>
      <div className="weather__minmax">
        <p>Min: {weather.main.temp_min} °</p>
        <p>Max: {weather.main.temp_max} °</p>
      </div>
    </div>
  );
}

function convertTimeStamp(timestamp, timezone){
  const convertTimezone = timezone / 3600; // convert seconds to hours 
  const date = new Date(timestamp * 1000);
  const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
      hour12: true,
  }
  return date.toLocaleString("es-US", options).toUpperCase()
}

export default body_box;