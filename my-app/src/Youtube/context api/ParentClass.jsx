import React, { createContext } from "react";
import FirstChild from "./FirstChild";

const data = createContext();
const gender = createContext();

const ParentClass = () => {
  const name = "Manish Verma";
  return (
    <>
      <h1>ParentClass</h1>
      <data.Provider value={name}>
        <FirstChild />
      </data.Provider>
    </>
  );
};

export default ParentClass;
export { data };
export { gender };
