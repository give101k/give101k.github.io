import React from "react";
import "../style/App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { TitleComponent } from "../TitleComponent.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
