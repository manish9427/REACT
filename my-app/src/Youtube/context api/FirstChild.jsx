import React, { useContext } from "react";
import SecondChild from "./SecondChild";
import { data } from "./ParentClass";

const FirstChild = () => {
  const Myname = useContext(data);
  return (
    <div>
      <h1>FirstChild</h1>
      <p>{Myname}</p>

      <SecondChild />
    </div>
  );
};

export default FirstChild;
