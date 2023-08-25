import React from "react";
import { useState } from "react";
const styleHooks = {
  margin: "0px auto",
  padding: "30px",
  width: "500px",
  boxShadow: "0px 0px 10px black",
};

const UseStateHook = () => {
  const [state, setState] = useState(0);
  function update() {
    setState(state + 1);
  }
  return (
    <div style={styleHooks}>
      <h1>Counter using useState hooks</h1>
      <p>number of times {state} click</p>
      <button onClick={update}>Cick Me</button>
    </div>
  );
};

export default UseStateHook;
