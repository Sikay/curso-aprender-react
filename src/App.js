import React, { Component } from "react";
import "./App.css";
/*
import HelloWorld from "./components/HelloWorld";
import State from "./components/State";
import Condicional from "./components/Condicional";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import Children from "./components/Children";
import FetchExample from "./components/FetchExample";
*/

import EjemploDeCicloDeActualizacion from "./components/EjemploDeCicloDeActualizacion";

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <HelloWorld />
        <State />
        <Condicional />
        <Lista />
        <Formulario />
        <Children />
        <FetchExample />
      */}

        <EjemploDeCicloDeActualizacion />
      </div>
    );
  }
}

export default App;
