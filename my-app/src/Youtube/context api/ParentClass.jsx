import React, { createContext } from "react";
import FirstChild from "./FirstChild";

const data = createContext();
const gender = createContext();

const ParentClass = () => {
  const name = "Msnish Verma";
  return (
    <data.Provider value={name}>
      <gender.Provider value={gender}>
        <h1>ParentClass</h1>
        <FirstChild />
      </gender.Provider>
    </data.Provider>
  );
};

export default ParentClass;
export { data };
export { gender };
