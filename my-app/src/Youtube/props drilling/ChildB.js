import React from "react";
import ChildC from "./ChildC";
const ChildB = ({ name }) => {
  return (
    <div>
      <h3>ChildB</h3>
      <ChildC name={name} />
    </div>
  );
};

export default ChildB;
