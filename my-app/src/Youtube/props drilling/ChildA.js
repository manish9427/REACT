import React from "react";
import ChildB from "./ChildB";

const ChildA = ({ name }) => {
  return (
    <div>
      <ChildB name={name} />
    </div>
  );
};

export default ChildA;
