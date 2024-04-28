import React from "react";

export default function Day(props) {
  function maxTemp() {
    let temperature = Math.round(props.code.temperaturemax);
    return temperature;
  }

  function minTemp() {
    let temperature = Math.round(props.code.temperaturemin);
    return temperature;
  }

  function day() {
    let date =new date(props.code.time);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="forecastinfo">
      <div className="forecastday">{day()}</div>
      <div className="forecastimg">
        {" "}
        <img src={props.code.icon} alt={props.code.description} width="60px" />
      </div>
      <div className="forecasttemp">
        {" "}
        <span className="maxtemp">{maxTemp()}</span>
        <span className="mintemp">{minTemp()}</span>
      </div>
    </div>
  );
}
