import { useContext } from "react";
import myContext from "./myContext";
import D from "./D";

function C(props) {
  const { title } = useContext(myContext);
  return (
    <div>
      <h1>C Component</h1>
      <h4>{title}</h4>
      <D />
    </div>
  );
}
export default C;
