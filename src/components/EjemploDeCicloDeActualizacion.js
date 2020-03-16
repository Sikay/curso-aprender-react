import React, { Component } from "react";
import PropTypes from "prop-types";

const ANIMAL_IMAGES = {
  panda: `https://goo.gl/oNbtoq`,
  cat: `https://goo.gl/PoQQXb`,
  dolphin: `https://goo.gl/BbiKCd`
};

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImages extends Component {
  static propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
  };

  state = { src: ANIMAL_IMAGES[this.props.animal] };

  static getDerivedStateFromProps(props, state) {
    if (state.animal !== props.animal) {
      return { src: ANIMAL_IMAGES[props.animal] };
    }
    return null;
  }

  shouldComponentUpdate(props) {
    return this.props.animal !== props.animal;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const img = document.querySelector("img");
    img.animate(
      [
        {
          filter: "blur(0px)"
        },
        {
          filter: "blur(2px)"
        }
      ],
      {
        duration: 500,
        easing: "ease"
      }
    );

    return img;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    snapshot.animate(
      [
        {
          filter: "blur(2px)"
        },
        {
          filter: "blur(0px)"
        }
      ],
      {
        duration: 1500,
        easing: "ease"
      }
    );
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

  _renderAnimalButton(animal) {
    return (
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.handleClick(animal)}
      >
        {animal}
      </button>
    );
  }

  render() {
    return (
      <div>
        <h4>Ciclo de Actualizacion, Ejemplo de: ShouldComponentUpdate() </h4>
        {ANIMALS.map(animalKey => this._renderAnimalButton(animalKey))}
        <AnimalImages animal={this.state.animal} />
      </div>
    );
  }
}

export default EjemploDeCicloDeActualizacion;
