import React from "react";
import { data } from "./ParentClass";
import { gender } from "./ParentClass";

const LastChild = () => {
  return (
    <div>
      <h1>LastChild</h1>
      <data.Consumer>
        {(name) => {
          console.log(name);
          return <h1>my name is {name}</h1>;
        }}
      </data.Consumer>
    </div>
  );
};

export default LastChild;
