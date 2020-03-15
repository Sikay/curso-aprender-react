import React, { Component } from "react";
import Forms from "./sections/Forms";

class Formulario extends Component {
  constructor() {
    super();
    this.state = { mouseX: 0, mouseY: 0 };
    // this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  // Las arrow function enlazan simpre el contexto desde donde se las llama
  handleMouseMove = e => {
    const { clientX, clientY } = e;
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    });
  };
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
        <div
          onMouseMove={this.handleMouseMove}
          style={{
            border: "1px solid black",
            margin: "10px 0 0 0",
            padding: "10px"
          }}
        >
          <p>
            {this.state.mouseX}, {this.state.mouseY}
          </p>
        </div>
        <Forms />
      </div>
    );
  }
}

export default Formulario;
