 
 import React from "react";

 function click(){
    alert("Hello click")
 }

 function About( props){

    return(
        // <h1>This is about page and I am from function component</h1>;
        // <button onClick={click}>Click Me</button>
        <h1> Name : {props.name} and Email: {props.email}</h1>
    )
 
 }

 