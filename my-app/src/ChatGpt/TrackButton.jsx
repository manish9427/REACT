import React, { useState } from "react";

export default function MyComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button onClick={handleClick}>{isClicked ? "Clicked!" : "Click me"}</button>
  );
}
