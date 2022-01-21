import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskList from "./components/TaskList";


function App() {
	const paraStyle = {
		"marginBottom":"15px"
	}
  return (
  	<div className="app">
  	<header className="app-header">
  	<h1>My Amazing ToDo-List App</h1>
  	<p style = {paraStyle} >The most simple and Amazing to do list app</p>
  	<TaskList/>
  	</header>
  	</div>
  	);
}

ReactDOM.render(<App/>, document.getElementById("root"));