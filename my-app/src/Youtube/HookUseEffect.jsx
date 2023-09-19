import React, { useState, useEffect } from "react";

const style = {
  margin: "10px auto",
  boxShadow: "0px 0px 10px black",
  width: "300px",
  padding: "30px",
};

const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Name");
  function updateState() {
    setCount(count + 1);
  }
  function updateData() {
    setData("Manish");
  }
  useEffect(() => {
    console.log("componet render");
  }, [data]);
  return (
    <div style={style}>
      <h1>HookUseEffect</h1>
      <h2>count {count}</h2>
      <h2>Data {data}</h2>
      <button onClick={updateState}>Update Count</button>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default HookUseEffect;
