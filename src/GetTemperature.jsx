import React from "react";

export default function GetTemperature() {
  return (
    <div>
      <span className="temp">{props.temp}</span>
      <span className="deg">°</span>
      <span className="cent">c</span>
    </div>
  );
}
