import React, { useState } from "react";

const Timer = () => {
  const [data, setData] = useState(0);
  const [id, setId] = useState(null);
  const style = {
    padding: "30px",
    width: "300px",
    boxShadow: "0px 0px 10px black",
    margin: "200px auto",
  };

  const start = () => {
    const intervalId = setInterval(() => {
      setData((x) => x + 1);
    }, 1000);
    setId(intervalId);
  };

  const stop = () => {
    clearInterval(id);
  };

  const reset = () => {
    clearInterval(id);
    setData(0);
  };

  return (
    <div style={style}>
      <h1>Timer</h1>
      <p>{data}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Timer;
