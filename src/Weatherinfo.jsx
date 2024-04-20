import React from "react";
import GetDate from "./getDate";
export default function Weather(props) {
  return (
    <div className="information">
      <div className="des-dat">
        {" "}
        <h2>{props.city}</h2>
        <p>
          <ul>
            <li>
              <GetDate date={props.date} />
            </li>
            <li>Descpription:{props.desc}</li>
          </ul>
        </p>
      </div>

      <div className="row">
        <div className="col-6">
          <img src={props.icon} alt={props.desc} width="60pv" />
          <span className="temp">{props.temp}</span>
          <span className="deg">°</span>
          <span className="cent">c</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation:{props.prec}</li>
            <li>Humidity:{props.humid}</li>
            <li>Wind:{props.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
