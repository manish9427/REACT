import React from "react";
import ChildB from "./ChildB";

const ChildA = ({ name }) => {
  return (
    <div>
      <h2>ChildA</h2>
      <ChildB name={name} />
    </div>
  );
};

export default ChildA;
