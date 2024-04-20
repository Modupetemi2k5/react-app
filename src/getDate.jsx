import React from "react";

export default function GetDate(props) {
  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let day = days[props.date.getDay()];
  let minute = props.date.getMinute();
  let hour = props.date.getHour();
  if (minute < 0) {
    return (minute = `0 ${minute}`);
  }

  return (
    <div>
      {day}:{hour}:{minute}
    </div>
  );
}
