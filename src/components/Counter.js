import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  return props.render(count, incrementCount);
}

export default Counter;
