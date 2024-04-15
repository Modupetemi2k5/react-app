import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weatherf">
      <form>
        <input
          type="search"
          placeholder="enter-city"
          value="city"
          className="searchinput"
        />

        <input type="submit" value="search" className="submitinput" />
      </form>
      <h2>New York</h2>
      <p>
        <ul>
          <li> Wednesday 7:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">⛅️8°</div>

          <div className="col-6">
            <ul>
              <li>precipitation:15%</li>
              <li>Humidity:72%</li>
              <li>Wind:13km/hr</li>
            </ul>
          </div>
        </div>
      </p>
    </div>
  );
}
