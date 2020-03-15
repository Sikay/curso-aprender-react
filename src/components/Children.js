import React, { Component } from "react";
import PropTypes from "prop-types";

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
  static propTypes = {
    author: PropTypes.string.isRequired
  };
  render() {
    const { author, children, date, title } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {author && (
          <p>
            <em>Escrito por {author}</em>
          </p>
        )}
        <Box>{date}</Box>
        <article>{children}</article>
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
          author={true}
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
