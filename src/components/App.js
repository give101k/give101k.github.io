import React from "react";
import "../style/App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { TitleComponent } from "../TitleComponent.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
    </>
  );
}

export default App;
