import React from "react";
import { createContext } from "react";
import ClassB from "./ClassB";

const data = createContext();
const style = {
  boxShadow: "0px 0px 10px black",
  width: "300px",
  margin: "10px auto",
  padding: "30px",
};
const ClassA = () => {
  const obj = {
    name: "manish",
    age: 23,
  };
  return (
    <data.Provider value={obj}>
      <div style={style}>
        <h1>useContext</h1>
        <ClassB />
      </div>
    </data.Provider>
  );
};

export default ClassA;
export { data };
