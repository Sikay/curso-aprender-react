import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Hello = props => <h2>{props.title}</h2>;

class Text extends Component {
  // render solo puede devolver un elemento por lo que todos los elementos
  // que utilicemos tendran que estar envueltos
  render() {
    // Podemos renderizar variables
    const textoSegunBool = this.props.boolean ? "Verdadero" : "Falso";
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2);
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{this.props.boolean}</p>
        <p>{JSON.stringify(this.props.boolean)}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Welcome to React" />
          <Text
            arrayOfNumbers={[2, 3, 10]}
            boolean={true}
            number={2}
            objectWithInfo={{ key: "value", key2: "otherValue" }}
            text="Esto es un texto"
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
