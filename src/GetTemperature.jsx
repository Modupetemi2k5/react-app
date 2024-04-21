import React, { useState } from "react";

export default function GetTemperature(props) {
  let [unit, setUnit] = useState("metric");
  function showFahrhenite(event) {
    event.preventDefault();
    setUnit((props.temperature * 9) / 5 + 32);
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit(props.temperature);
  }

  if (unit === "metric") {
    return (
      <div>
        <span className="temp">{props.temperature}</span>
        <span className="deg">°</span>
        <span className="cent">
          C|
          <a href="/" onClick={showFahrhenite}>
            F
          </a>
        </span>
        |
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{props.temperature}</span>
        <span className="deg">°</span>
        <span className="cent">
          <a href="/" onClick={showCelcius}>
            {" "}
            C
          </a>
          | F
        </span>
        |
      </div>
    );
  }
}
