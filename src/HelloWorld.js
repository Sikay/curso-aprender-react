import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Hello = props => <h2>{props.title}</h2>;

class Text extends Component {
  // render solo puede devolver un elemento por lo que todos los elementos
  // que utilicemos tendran que estar envueltos
  render() {
    // Las props son inmutables
    // Destructuracion
    const {
      arrayOfNumbers,
      boolean,
      number,
      multiply,
      objectWithInfo,
      text,
      title,
      propPorDefecto
    } = this.props;
    // Podemos renderizar variables
    const textoSegunBool = boolean ? "Verdadero" : "Falso";
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
      <div>
        {title}
        <p>{propPorDefecto}</p>
        <p>{text}</p>
        <p>{number}</p>
        <p>{boolean}</p>
        <p>{JSON.stringify(boolean)}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    );
  }
}

Text.defaultProps = {
  propPorDefecto: "Texto por defecto"
};

class HelloWorld extends Component {
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
            multiply={number => number * 4}
            objectWithInfo={{ key: "value", key2: "otherValue" }}
            text="Esto es un texto"
            title={<h1>Este es el titulo</h1>}
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

export default HelloWorld;
