import { useState, useEffect } from "react";
export default function CounterApp() {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("Called fun is Called");
    localStorage.setItem("myname", "Manish Verma");
    document.title = "Manish Verma";

    return () => {
      //   alert("Component will Unmount");
    };
  });
  return (
    <div>
      <h1>Counter App:{state}</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        count
      </button>
    </div>
  );
}
