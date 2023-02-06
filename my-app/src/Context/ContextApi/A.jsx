import { useState } from "react";
import myContext from "../../Context/myContext";
import B from "./B";

var myStyle = {
  boxShadow: "0px 0px 10px black",
  padding: "50px",
  width: "500px",
  margin: "50px auto",
};

function A(props) {
  const [state, setState] = useState({
    title: "Masai",
  });
  return (
    <div style={myStyle}>
      <h1>A Component</h1>
      <button
        onClick={() => {
          setState({
            title: "Manish",
          });
        }}
      >
        Modify Data
      </button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}
export default A;
