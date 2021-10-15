import React from "react";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import Context from "../lib/Context";
import UserContext from "./UserContext";
function Section() {
  return (
    <div>
      <h1>Section</h1>
      <Counter
        render={(count, incrementCount) => {
          return (
            // <Context.Consumer>
            //   {(valueFromApp) => {
            //     return (
            //       <HoverCounter
            //         count={count}
            //         incrementCount={incrementCount}
            //         valueFromApp={valueFromApp}
            //       />
            //     );
            //   }}
            // </Context.Consumer>
            <UserContext.Consumer>
              {(valueFromApp) => {
                return (
                  <HoverCounter
                    count={count}
                    incrementCount={incrementCount}
                    valueFromApp={valueFromApp}
                  />
                );
              }}
            </UserContext.Consumer>
          );
        }}
      />
    </div>
  );
}

export default Section;
