import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <input type="text" placeholder="Enter the Data ?" />
      <button>Send the Data to Child</button>
      <Child />
    </div>
  );
}
export default Parent;
