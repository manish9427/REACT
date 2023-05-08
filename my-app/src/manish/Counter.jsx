import { useState } from "react";

const mystyle = {
  padding: "30px",
  boxShadow: "0px 0px 10px black",
  width: "300px",
  margin: "0px auto",
  marginTop: "50px",
};

const Counter = () => {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };
  const sub = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };
  return (
    <div style={mystyle}>
      <h1>count</h1>
      <h1>{state}</h1>
      <button onClick={add}>ADD</button> &nbsp;
      <button onClick={sub}>SUB</button>
    </div>
  );
};
export default Counter;
