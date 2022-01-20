import React from "react";
import ReactDOM from "react-dom";

// My first component
function HelloWorld() {
  return <h1>Hello, World!</h1>; // JSX Element
}

ReactDOM.render(<HelloWorld/>, document.getElementById("root"));