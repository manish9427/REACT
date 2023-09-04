import React from "react";
import LastChild from "./LastChild";

const SecondChild = () => {
  return (
    <div>
      <h1>SecondChild</h1>
      <LastChild />
    </div>
  );
};

export default SecondChild;
