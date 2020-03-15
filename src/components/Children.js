import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div style={{ border: "1px solid #000", margin: "5px", padding: "5px" }}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>
          <em>Escrito por {this.props.author}</em>
        </p>
        <Box>{this.props.date}</Box>
        <article>{this.props.children}</article>
      </section>
    );
  }
}

class Children extends Component {
  render() {
    return (
      <div>
        <h4>Children props</h4>
        <Article
          author="Anonimo"
          date={new Date().toLocaleDateString()}
          title="Articulo sobre la prop children"
        >
          <p>
            El contenido que envolvemos dentro del componente Article será
            enviado al componente como this.props.children
          </p>
          <strong>
            Y mantiene las etiquetas y componentes que hayamos añadido dentro
          </strong>
        </Article>
      </div>
    );
  }
}

export default Children;
