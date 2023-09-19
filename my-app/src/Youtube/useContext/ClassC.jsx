import React from "react";
import { useContext } from "react";
import { data } from "./ClassA";

const ClassC = () => {
  const obj = useContext(data);
  return <div>my name is {obj.age}</div>;
};

export default ClassC;
