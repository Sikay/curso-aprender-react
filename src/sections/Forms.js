import React, { Component } from "react";

class Forms extends Component {
  handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("twitter").value;
    console.log({ name, email });
  }
  render() {
    return (
      <div>
        <h4>Formulario</h4>
        <form>
          <p>
            <label>Nombre: </label>
            <input
              id="name"
              name="userName"
              placeholder="Introduce el nombre"
            />
          </p>
          <p>
            <label>Twitter: </label>
            <input
              id="twitter"
              name="twitterAcount"
              placeholder="Introduce tu Twitter"
            />
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
