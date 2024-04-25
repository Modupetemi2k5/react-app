import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState("");
  const [ready, setReady] = useState(false);

  function getForecast(response) {
    console.log(response.data);
    setForecast({
      temperaturemax: response.data.daily[0].temperature.max,
      temperaturemin: response.data.daily[0].temperature.min,
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon: (
        <img
          src={response.data.daily[0].condition.icon_url}
          alt={response.data.daily[0].condition.description}
        />
      ),
      wind: response.data.daily[0].wind.speed,
      city: response.data.city,
      time: response.data.daily[0].time,
    });
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="forecastday">{forecast.time}</div>
            <div className="forecastimg">
              {" "}
              <img
                src={forecast.icon}
                alt={forecast.description}
                width="60px"
              />
            </div>
            <div className="forecasttemp">
              {" "}
              <span className="maxtemp">{forecast.temperaturemax}</span>
              <span className="mintemp"> {forecast.temperaturemin}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "new york";
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getForecast);
    return "fetching forecast.........";
  }
}
