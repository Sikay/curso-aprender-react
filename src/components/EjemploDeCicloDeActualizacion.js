import React, { Component } from "react";
import PropTypes from "prop-types";

const ANIMAL_IMAGES = {
  cat: `https://goo.gl/PoQQXb`,
  dolphin: `https://goo.gl/BbiKCd`,
  panda: `https://goo.gl/oNbtoq`
};

class AnimalImages extends Component {
  static propTypes = {
    animal: PropTypes.oneOf(["cat", "dolphin", "panda"])
  };

  state = { src: ANIMAL_IMAGES[this.props.animal] };

  componentWillReceiveProps(nextProps) {
    if (this.props.animal !== nextProps.animal) {
      this.setState({ src: ANIMAL_IMAGES[nextProps.animal] });
    }
  }

  render() {
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} />
      </div>
    );
  }
}

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: "panda" };

  handleClick(animalClick) {
    this.setState({
      animal: animalClick
    });
  }

  render() {
    return (
      <div>
        <h4>Ciclo de Actualizacion, Ejemplo de: ComponentWilReceiveProps() </h4>
        <button onClick={() => this.handleClick("panda")}>Panda</button>
        <button onClick={() => this.handleClick("cat")}>Cat</button>
        <button onClick={() => this.handleClick("dolphin")}>Dolphin</button>
        <AnimalImages animal={this.state.animal} />
      </div>
    );
  }
}

export default EjemploDeCicloDeActualizacion;
