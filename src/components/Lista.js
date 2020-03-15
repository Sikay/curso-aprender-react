import React, { Component } from "react";
import cars from "../data/cars.json";

class CarItem extends Component {
  render() {
    const car = this.props.car;
    return (
      <li key={car.id}>
        <p>
          <strong>Nombre: </strong>
          {car.name}
        </p>
        <p>
          <strong>Marca: </strong>
          {car.company}
        </p>
      </li>
    );
  }
}

class Lista extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <h4>Trabajando con listas</h4>
        {numbers.map((number, index) => (
          <p key={index}>Numero: {number}</p>
        ))}
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {// key debe estar en el map, no es accesible como prop con el atributo key
          cars.map(car => (
            <CarItem key={car.id} car={car} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Lista;
