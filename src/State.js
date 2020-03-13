import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
  }
  render() {
    return <span>{this.state.contador}</span>;
  }
}

class State extends Component {
  render() {
    return (
      <div>
        <p>Primer componente con state</p>
        <Contador />
      </div>
    );
  }
}

export default State;
