import React from "react";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import Context from "../lib/Context";
function Section() {
  return (
    <div>
      <h1>Section</h1>
      <Counter
        render={(count, incrementCount) => {
          return (
            <Context.Consumer>
              {(valueFromApp) => {
                return (
                  <HoverCounter
                    count={count}
                    incrementCount={incrementCount}
                    valueFromApp={valueFromApp}
                  />
                );
              }}
            </Context.Consumer>
          );
        }}
      />
    </div>
  );
}

export default Section;
