import React, { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(0);

  const add = () => {
    setData(data + 1);
  };
  const sub = () => {
    setData(data - 1);
  };
  const reset = () => {
    setData(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{data}</p>
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
      <button onClick={reset}>CLEAR</button>
    </div>
  );
};

export default Counter;
