import React, { Component } from "react";

class ClassClick extends Component {
  change() {
    document.getElementById("id1").innerHTML = "I am white Panther";
  }
  render() {
    return (
      <div>
        <h1 id="id1">I am Black Panther</h1>
        <button onClick={this.change}>Change Message</button>
      </div>
    );
  }
}
export default ClassClick;
