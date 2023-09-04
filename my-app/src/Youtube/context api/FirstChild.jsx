import React from "react";
import SecondChild from "./SecondChild";

const FirstChild = () => {
  return (
    <div>
      <h1>FirstChild</h1>
      <SecondChild />
    </div>
  );
};

export default FirstChild;
