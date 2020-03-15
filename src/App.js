import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import State from "./State";
import Condicional from "./Condicional";
import Lista from "./Lista";
import Formulario from "./Formulario";

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <State />
        <Condicional />
        <Lista />
        <Formulario />
      </div>
    );
  }
}

export default App;
