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

function useConditionalRendering(mostrarA) {
  if (mostrarA) {
    return <ComponenteA />;
  }
  return <ComponenteB />;
}

class ConditionalSection extends Component {
  constructor() {
    super();
    this.state = {
      mostrarA: true
    };
  }
  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {useConditionalRendering(this.state.mostrarA)}
      </div>
    );
  }
}

export default ConditionalSection;
