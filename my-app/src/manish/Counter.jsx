// import { useState, useEffect } from "react";

// const mystyle = {
//   padding: "30px",
//   boxShadow: "0px 0px 10px black",
//   width: "300px",
//   margin: "0px auto",
//   marginTop: "50px",
// };

// const Counter = () => {
//   const [state, setState] = useState(0);
//   useEffect(() => {
//     const value = localStorage.getItem("count");
//     if (value) {
//       setState(parseInt(value));
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("count", state);
//   }, [state]);

//   const add = () => {
//     setState(state + 1);
//   };
//   const sub = () => {
//     if (state > 0) {
//       setState(state - 1);
//     }
//   };
//   const reset = () => {
//     setState(0);
//   };
//   return (
//     <div style={mystyle}>
//       <h1>count</h1>
//       <h1>{state}</h1>
//       <button onClick={add}>ADD</button> &nbsp;
//       <button onClick={sub}>SUB</button> &nbsp;
//       <button onClick={reset}>RESET</button>
//     </div>
//   );
// };
// export default Counter;

import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const myStyle = {
    padding: "30px",
    width: "300px",
    boxShadow: "0px 0px 10px black",
    margin: "0px auto",
  };

  return (
    <div style={myStyle}>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)}>Sub</button>&nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
export default Counter;
