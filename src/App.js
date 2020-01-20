import React from "react";
import "./App.css";
import github from "./images/GitHub-Mark-Light-120px-plus.png";
import Countdown from "./countdown";
import { TitleComponent } from "./TitleComponent.jsx";

function App() {
  return (
    <>
      <TitleComponent />

      <div className="bgimg">
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <Countdown />
          <hr />
          <a href="https://github.com/give101k">
            <img src={github} alt="" id="github" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
