import React, { createContext } from "react";
import FirstChild from "./FirstChild";

const data = createContext();
const gender = createContext();
const style = {
  width: "300px",
  margin: "10px auto",
  padding: "30px",
  boxShadow: "0px 0px 10px black",
};

const ParentClass = () => {
  const name = "Manish";
  const age = 26;
  return (
    <div style={style}>
      <h1>Context APi</h1>
      <data.Provider value={name}>
        <gender.Provider value={age}>
          <FirstChild />
        </gender.Provider>
      </data.Provider>
    </div>
  );
};

export default ParentClass;
export { data };
export { gender };
