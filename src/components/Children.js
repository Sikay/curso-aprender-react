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

class Children extends Component {
  render() {
    return (
      <div>
        <h4>Children props</h4>
        <Box>Box children</Box>
        <Box>Otro Box con otro children</Box>
      </div>
    );
  }
}

export default Children;
