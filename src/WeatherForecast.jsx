import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
 
  function getForecast(response) {}
  let city="new york"
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(getForecast);
  return (
    <div className="fforecast">
      <div className="row">
        <div className="col">
          <div className="forecastday">Thu</div>
          <div className="forecastimg">
            {" "}
            <img src={props.icon} alt={props.desc} width="60px" />
          </div>
          <div className="forecasttemp">
            {" "}
            <span className="maxtemp">18°</span>
            <span className="mintemp"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
