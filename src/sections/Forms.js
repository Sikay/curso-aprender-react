import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      twitterAcount: "@",
      terms: true
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    // Las ref se suelen utilizar cuando queremos integrar una libreria externa
    // pero nuestro código dejara de ser declarativo por lo que si no tenemos que integrar
    // hay formas mas correctas que utilizar referencias
    const name = this.inputName.value;
    const email = document.getElementById("twitter").value;
    console.log(this.state);
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleTermsChange = e => {
    console.log("handleTermsChange");
    console.log(e.target.checked);
    this.setState({
      terms: e.target.checked
    });
  };

  render() {
    return (
      <div>
        <h4>Formulario</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="userName"
              placeholder="Introduce el nombre"
              ref={inputElement => (this.inputName = inputElement)}
              value={this.state.userName}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter: </label>
            <input
              id="twitter"
              name="twitterAcount"
              placeholder="Introduce tu Twitter"
              value={this.state.twitterAcount}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <label>
              <input
                name="terms"
                onChange={this.handleTermsChange}
                checked={this.state.terms}
                type="checkbox"
              />
              Accepted terms
            </label>
          </p>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
