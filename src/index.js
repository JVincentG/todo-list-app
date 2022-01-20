import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component
function App() {
	const paraStyle = {
		"marginBottom":"15px"
	}
  return (
  	<div className="app">
  	<header className="app-header">
  	<h1>My Amazing ToDo-List App</h1>
  	<p style = {paraStyle} >The most simple and Amazing to do list app</p>
  	<ul>
  		<li className="tasks-item">Sleep later</li>
  		<li className="tasks-item">Feed the cat at 6pm</li>
  		<li className="tasks-item">watch the new episode of one piece</li>
  	</ul>
  	</header>
  	</div>
  	);
}

ReactDOM.render(<App/>, document.getElementById("root"));