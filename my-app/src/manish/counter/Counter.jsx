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
    setData(1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{data}</p>
      <button onClick={add}>start</button>
      <button onClick={sub}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
