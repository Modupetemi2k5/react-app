import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
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
        <h2>New York</h2>
        <p>
          <ul>
            <li> Wednesday 7:00</li>
            <li>Mostly cloudy</li>
          </ul>
        </p>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun-behind-cloud.png"
            alt="mostly-cloudy"
            width="60pv"
          />{" "}
          <span className="temp">8</span>
          <span className="deg">°</span>
          <span className="cent">c</span>
        </div>

        <div className="col-6">
          <ul>
            <li>precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
