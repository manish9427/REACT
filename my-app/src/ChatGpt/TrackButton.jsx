import React, { useState } from "react";

const myStyle = {
  width: "300px",
  padding: "50px",
  boxShadow: "0px 0px 10px black",
  margin: "50px auto",
};
export default function MyComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div style={myStyle}>
      <h1>Use of useState</h1>
      <button onClick={handleClick}>
        {isClicked ? "Clicked!" : "Click me"}
      </button>
    </div>
  );
}
