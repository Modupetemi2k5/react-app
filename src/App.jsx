import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    < div className="weather-app">
      <div children="container">
        <h1>Weather-Ap</h1>
        <Weather />

        <footer>
          <p>
            This project was code by{" "}
            <a href="mailto:moodupetemi2k5@gmail"> Modupetemi2k5</a>
            <a href="netlify"> open sourced on Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
