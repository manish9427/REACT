import react from "react";
import { useEffect, useState } from "react";
const UseFetchHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log("Effect ran");

    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    const handleKeyDown = (event) => {
      console.log("Key pressed:", event.key);
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      console.log("Cleanup");
      // Reset the document title when the component is unmounted
      document.title = "React App";
      // Remove event listener when component unmounts
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]); // Dependency array: this effect will re-run only if `count` changes
  // }, []); // Empty dependency array: effect runs only once after the component mounts
  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseFetchHook;
