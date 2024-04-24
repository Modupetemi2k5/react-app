import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="fforecast">
      <div className="row">
        <div className="col">
          <div className="forecastday">Thu</div>
          <div className="forecastimg">
            {" "}
            <img src={props.icon} alt={props.desc} width="40px" />
          </div>
          <span className="maxtemp">18°°</span>
          <span className="mintemp"> 10°°</span>
        </div>
      </div>
    </div>
  );
}
