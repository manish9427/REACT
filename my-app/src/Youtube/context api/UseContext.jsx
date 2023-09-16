import React, { useContext } from "react";
import { info } from "./FirstChild";
const UseContext = () => {
  //   const ( age, school ) = useContext(info);
  const age = useContext(info);
  //   const ( age, school ) = useContext(info);
  return (
    <div>
      <h1>SecondChild {age}</h1>
    </div>
  );
};

export default UseContext;
