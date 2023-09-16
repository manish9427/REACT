import React, { useContext, createContext } from "react";
import SecondChild from "./SecondChild";
import { data } from "./ParentClass";

const info = createContext();

const FirstChild = () => {
  const Myname = useContext(data);

  const age = 23;
  const school = "rlps";
  return (
    <div>
      <h1>FirstChild</h1>
      <p>{Myname}</p>

      <info.Provider value={{ age, school }}>
        <SecondChild />
      </info.Provider>
    </div>
  );
};

export default FirstChild;
export { info };
