import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState("");
  const [notready, setNotready] = useState(false);
  function getForecast(response) {
    console.log(response.data);
    setForecast({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: (
        <img
          src={response.data.condition.icon_url}
          alt={response.data.condition.description}
        />
      ),
      wind: response.data.wind.speed,
      city: response.data.city,
      time: new date(response.data.time * 1000),
      ready: true,
    });
  }
  if (notready) {
    return;
    let city = "new york";
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    let apiUrl2 = `https://api.shecodes.io/weather/v1/forecast?lat=38.71667&lon=-9.13333&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
  } else {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="forecastday">Thu</div>
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
              <span className="maxtemp">18°</span>
              <span className="mintemp"> 10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
