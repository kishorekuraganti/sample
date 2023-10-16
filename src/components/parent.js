import React, { Component } from "react";

export class parent extends Component {
  render() {
    return (
      <div>
        <h1>Hi I am Parent</h1>
        <child></child>
      </div>
    );
  }
}

export default parent;
