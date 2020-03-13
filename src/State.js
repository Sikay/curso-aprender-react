import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
    //setState es asincrono
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
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
