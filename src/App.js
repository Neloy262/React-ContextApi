import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Context from "./lib/Context";
import Counter from "./components/Counter";
import Section from "./components/Section";
import { useState } from "react";
import UserContext from "./components/UserContext";
function App() {
  let [dummy, setDummy] = useState({ name: "Neloy", age: "24" });
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => {
          return <ClickCounter count={count} incrementCount={incrementCount} />;
        }}
      />
      <UserContext.Provider value={dummy}>
        <Section />
      </UserContext.Provider>
      {/* <Context.Provider value={dummy} children={<Section />}></Context.Provider> */}
    </div>
  );
}

export default App;
