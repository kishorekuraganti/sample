// install es7 react snippets extension

// rce for class
// rfce for functional component

import React, { Component } from "react";

export class State extends Component {
  constructor() {
    super();

    this.state = {
      name: "Kishore",
      age: 20,
      occupation: "Student",
    };
  }
  changeState() {
    this.setState({
      name: "Krishna",
      age: 21,
      occupation: "Emoployee",
    });
    this.changeState = this.changeState.bind(this);
  }
  render() {
    return (
      <div>
        <h1>
          Hii, My name is {this.state.name},My age is {this.state.age},I am a{" "}
          {this.state.occupation}
        </h1>
        <button onClick={this.changeState}>Change Button</button>
      </div>
    );
  }
}

export default State;
