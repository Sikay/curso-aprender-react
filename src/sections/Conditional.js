import React, { Component } from "react";

class ComponenteA extends Component {
  render() {
    return (
      <div>
        <p>Componente A</p>
      </div>
    );
  }
}

class ComponenteB extends Component {
  render() {
    return (
      <div>
        <p>Componente B</p>
      </div>
    );
  }
}

class ConditionalSection extends Component {
  constructor() {
    super();
    this.state = {
      mostrarA: false
    };
  }
  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
      </div>
    );
  }
}

export default ConditionalSection;
