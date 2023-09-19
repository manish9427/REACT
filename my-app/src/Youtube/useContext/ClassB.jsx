import React from "react";
import ClassC from "./ClassC";
import { useContext } from "react";
import { data } from "./ClassA";

const ClassB = () => {
  const obj = useContext(data);
  return (
    <div>
      my name is {obj.name}
      <ClassC />
    </div>
  );
};

export default ClassB;
