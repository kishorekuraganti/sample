import React, { Component } from "react";

class Classcomp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jet airways",
      date: "5 Oct 2023",
      dest: "Delhi",
      Price: 5000,
    };
  }
  render() {
    return (
      <div>
        <h1>I am class component</h1>
        <p>I am paragraph inside class component</p>
        <h4>{this.state.name}</h4>
        <h4>{this.state.date}</h4>
        <h4>{this.state.dest}</h4>
        <h4>{this.state.Price}</h4>
      </div>
    );
  }
}
export default Classcomp;
