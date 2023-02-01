import { useRef } from "react";

function DOM() {
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  const changeContent = () => {
    h1Ref.current.innerText = "React in JS Library";
    h1Ref.current.style.color = "green";
    buttonRef.current.style.color = "red";
  };

  return (
    <div>
      <h1 ref={h1Ref}>useRef Concept in React</h1>
      <button ref={buttonRef} onClick={changeContent}>
        Change Content
      </button>
    </div>
  );
}
export default DOM;
