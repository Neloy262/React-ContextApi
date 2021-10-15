import React from "react";

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.incrementCount}>Click me {props.count}</button>
    </div>
  );
}

export default ClickCounter;
