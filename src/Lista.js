import React, { Component } from "react";

class Lista extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <h4>Trabajando con listas</h4>
        {numbers.map((number, index) => (
          <p key={index}>Numero: {number}</p>
        ))}
      </div>
    );
  }
}

export default Lista;
