import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="weather-app">
      <div children="container">
        <h1>Weather-App</h1>
        <Weather />

        <footer>
          <p>
            This project was code by{" "}
            <a
              href="mailto:moodupetemi2k5@gmail"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Modupetemi2k5
            </a>
            <a href="netlify" target="_blank" rel="noreferrer">
              {" "}
              open sourced on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
