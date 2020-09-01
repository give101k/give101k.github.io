import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Home = () => (
  <>
    <Intro></Intro>
    <Skills></Skills>
  </>
);

export default Home;
