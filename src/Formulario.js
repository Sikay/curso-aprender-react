import React, { Component } from "react";

class Formulario extends Component {
  render() {
    return (
      <div>
        <h4>Eventos</h4>
        <button onClick={() => alert("hi")}>Hi there!</button>
      </div>
    );
  }
}

export default Formulario;
