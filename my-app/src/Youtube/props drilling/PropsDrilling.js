import React from "react";
import ChildA from "./ChildA";

const style = {
  margin: "10px auto",
  boxShadow: "0px 0px 10px black",
  width: "300px",
  padding: "30px",
};

const PropsDrilling = () => {
  const name = "Manish";
  return (
    <div style={style}>
      <h1>PropsDrilling</h1>
      <ChildA name={name} />
    </div>
  );
};

export default PropsDrilling;
