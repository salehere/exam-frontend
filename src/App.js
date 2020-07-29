import React, { Component } from "react";
import background1 from "../src/assets/images/bg.jpg";
import logo from "../src/assets/images/logo.png";
import Sectionchange1 from "./Sectionchange1";
import Secondpage from "./Secondpage";

function App() {
    return (
    <div className="app">

    <img src={background1} alt="" className="imgback" />
    <img src={logo} alt="" className="logo" ></img>
      <Sectionchange1 />
  </div>);
  }




export default App;
