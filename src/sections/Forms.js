import React, { Component } from "react";

class Forms extends Component {
  handleClick = e => {
    e.preventDefault();
    // Las ref se suelen utilizar cuando queremos integrar una libreria externa
    // pero nuestro código dejara de ser declarativo por lo que si no tenemos que integrar
    // hay formas mas correctas que utilizar referencias
    const name = this.inputName.value;
    const email = document.getElementById("twitter").value;
    console.log({ name, email });
  };
  render() {
    return (
      <div>
        <h4>Formulario</h4>
        <form>
          <p>
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="userName"
              placeholder="Introduce el nombre"
              ref={inputElement => (this.inputName = inputElement)}
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter: </label>
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
