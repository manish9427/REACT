import React from "react";
import { useState, useRef } from "react";

const style = {
  margin: "10px auto",
  padding: "30px",
  width: "300px",
  boxShadow: "0px 0px 10px black",
};

const HookUseRef = () => {
  const refElement = useRef(""); // call the useRef
  const [name, setName] = useState("Manish");
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "red";
    refElement.current.value = "Man";
  }
  return (
    <div style={style}>
      <h1>HookUseRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      &nbsp;
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle input</button>
    </div>
  );
};

export default HookUseRef;
