import React from "react";
const stylig = {
  margin: "10px auto",
  boxShadow: "0px 0px 10px black",
  width: "300px",
  padding: "30px",
};

const StateLearning = () => {
  var x = 10;
  function updateState() {
    x = 15;
  }
  console.log(x);
  return (
    <div style={stylig}>
      <h1>StateLearning {x}</h1>
      <button onClick={updateState}>Click Me</button>
    </div>
  );
};

export default StateLearning;

// since we are not able to change the value that why we required state
