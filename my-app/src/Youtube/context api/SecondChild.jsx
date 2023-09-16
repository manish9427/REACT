import React from "react";
import LastChild from "./LastChild";

import UseContext from "./UseContext";

const SecondChild = () => {
  return (
    <div>
      <h1>SecondChild</h1>
      <LastChild />
      <UseContext />
    </div>
  );
};

export default SecondChild;
