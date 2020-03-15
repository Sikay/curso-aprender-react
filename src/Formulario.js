import React, { Component } from "react";

class Formulario extends Component {
  handleClick(e) {
    // React envuelve los eventos para que sean complatible con los navegadores
    console.log(e);
    console.log(e.nativeEvent);
    alert("hi");
  }
  render() {
    return (
      <div>
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
      </div>
    );
  }
}

export default Formulario;
