import {useState} from "react";
import Task from "./Task";
function TaskList(){
	const taskItemsList = [
	"Sleep",
	"Feed Cat",
	"Watch Netflixs"
	];

	const [taskValue,setTaskValue] = useState("Just another task");
	//console.log("taskValue: ", taskValue);

	return(
		<div>
		<input className="task-input" placeholder="Create a new task"/>
		<ul>
  		{taskItemsList.map((task,index) =>{
  			return <Task key={index} taskName={task}/>
  			})}
  	    </ul>
  	    </div>
		);
}

export default TaskList;