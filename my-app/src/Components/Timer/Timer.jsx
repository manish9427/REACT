import React from "react";
import { useState, useRef } from "react";
export default function Timer() {
  //   var timerId;
  const ref1 = useRef(0);
  const [state, setState] = useState(0);
  const startTimer = () => {
    ref1.current = setInterval(() => {
      //   timerId = setState((prevState) => {
      setState((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(ref1.current);
  };
  return (
    <div
      style={{
        padding: "50px",
        margin: "50px auto",
        boxShadow: "0px 0px 10px black",
        width: "500px",
      }}
    >
      <h1>Timer Value : {state}</h1>
      <button onClick={startTimer}>Start</button>&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
