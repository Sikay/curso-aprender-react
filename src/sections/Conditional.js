import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    return <button>Iniciar Sesión</button>;
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido, usuario!</p>
        <button>Cerrar sesión</button>
      </div>
    );
  }
}

class ConditionalSection extends Component {
  constructor() {
    super();
    this.state = {
      isUserLogged: false
    };
  }
  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {this.state.isUserLogged ? <LoginButton /> : <LogoutButton />}
      </div>
    );
  }
}

export default ConditionalSection;
