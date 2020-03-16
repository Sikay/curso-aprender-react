import React, { Component } from "react";

class ComponenteADesmontar extends Component {
  state = { windowWidth: 0 };

  _updateStateWithWindowEwidth = () => {
    this.setState({ windowWidth: document.body.clientWidth });
  };

  componentDidMount() {
    this._updateStateWithWindowEwidth();
    window.addEventListener("resize", this._updateStateWithWindowEwidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateStateWithWindowEwidth);
  }

  render() {
    return (
      <div>
        <p>Ancho de la ventana: {this.state.windowWidth}</p>
      </div>
    );
  }
}

class EjemploDeComponentWillUnmount extends Component {
  state = {
    mostrarComponente: true
  };

  handleClick = () => {
    this.setState({
      mostrarComponente: false
    });
  };

  render() {
    if (this.state.mostrarComponente) {
      return (
        <div>
          <h4>Ciclo de desmontaje: componentWillUnmount</h4>
          <ComponenteADesmontar />
          <button onClick={this.handleClick}>Desmontar</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Componente Desmontado</p>
        </div>
      );
    }
  }
}

export default EjemploDeComponentWillUnmount;
