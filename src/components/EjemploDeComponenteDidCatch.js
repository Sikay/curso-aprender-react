import React, { Component } from "react";

class BotonQueLanzaError extends Component {
  state = { throwError: false };

  handleClick = () => {
    this.setState({
      throwError: true
    });
  };

  render() {
    if (this.state.throwError) {
      throw new Error("Error lanzado por el boton");
    }

    return <button onClick={this.handleClick}>Lanzar Error!</button>;
  }
}

class EjemploDeComponenteDidCatch extends Component {
  state = {
    hasError: false,
    errorMsg: ""
  };

  handleClick = () => {
    this.setState({
      hasError: false,
      errorMsg: ""
    });
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMsg: error.toString()
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Error en el componente: {this.state.errorMsg}</p>
          <button onClick={this.handleClick}>Volver a la aplicación</button>
        </div>
      );
    }
    return (
      <div>
        <h4>Ciclo de error: componentDidCatch</h4>
        <BotonQueLanzaError />
      </div>
    );
  }
}

export default EjemploDeComponenteDidCatch;
