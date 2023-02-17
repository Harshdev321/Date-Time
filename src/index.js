import React from "react";
import ReactDOM  from "react-dom";


const name = "Harsh Vardhan Gupta";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
<>
 <h1>Hello My Name Is {name}</h1>
 <p> Current Date Is {currDate}</p>
 <p> Current Time Is {currTime} </p>,
</>,

document.getElementById("root"),
);
