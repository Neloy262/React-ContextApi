import React from "react";

function HoverCounter(props) {
  return (
    <div>
      <h1 onMouseOver={props.incrementCount}>Hover {props.count}</h1>
      {props.valueFromApp.age}
    </div>
  );
}

export default HoverCounter;
