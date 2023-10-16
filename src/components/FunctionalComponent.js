import React from "react";

function FunctionalComponent(props) {
  console.log(props);
  return (
    <div>
      <h1>I am functional Component</h1>
      <p>I am para in func component</p>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.occupation}</h2>
    </div>
  );
}

export default FunctionalComponent;
