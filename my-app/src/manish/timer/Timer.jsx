import React, { useState } from "react";

const Timer = () => {
  const [data, setData] = useState(0);

  const start = () => {
    setData(data + 1);
  };
  const stop = () => {
    setData(data - 1);
  };
  const reset = () => {
    setData(1);
  };
  return (
    <div>
      <h1>Timer</h1>
      <p>{data}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Timer;
