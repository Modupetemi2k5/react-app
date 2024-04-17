import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  let [ready, setReady] = useState("false");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [precipitation, setPrecipitation] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  let [city, setCity] = useState("");
  let [date, setDate] = useState("");
  function getWeather(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    setHumidity(response.data.temperature.humidity);
    setDescription(response.data.condition.description);
    setPrecipitation();
    setWind(response.data.wind.speed);
    setIcon(<img alt="icon" src={response.data.condition.icon_url} />);
    setCity();
    setDate();
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weatherf">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter-city"
                className="searchinput"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary submitinput"
              />
            </div>{" "}
          </div>
        </form>

        <div className="des-dat">
          {" "}
          <h2>{city}</h2>
          <p>
            <ul>
              <li>
                <getDate date={setDate} />
              </li>
              <li>Descpription:{description}</li>
            </ul>
          </p>
        </div>

        <div className="row">
          <div className="col-6">
            <img src={icon} alt={description} width="60pv" />
            <span className="temp">{temperature}</span>
            <span className="deg">°</span>
            <span className="cent">c</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation:{precipitation}</li>
              <li>Humidity:{humidity}</li>
              <li>Wind:{wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "new york";
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
    return "loading.....";
  }
}
