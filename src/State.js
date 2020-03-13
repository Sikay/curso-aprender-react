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
    return <ContadorNumero numero={this.state.contador} />;
  }
}

class ContadorNumero extends Component {
  render() {
    // Propagacion unidireccional de padres a hijos
    console.log("ContadorNumero render()");
    return <span>{this.props.numero}</span>;
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
