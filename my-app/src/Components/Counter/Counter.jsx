import { useState } from "react";
var counterStyle = {
  width: "300px",
  margin: "100px auto",
  padding: "50px",
  boxShadow: "0 0 10px black",
};
function Counter() {
  let [state, setState] = useState(0);
  const increaseCount = () => {
    setState(state++);
  };
  return (
    <div style={counterStyle}>
      <h1>Count Value is {state}</h1>
      <button onClick={increaseCount}>Add Count</button>
    </div>
  );
}
export default Counter;
