import { useContext } from "react";
import myContext from "./myContext";

function D(props) {
  const data = useContext(myContext);
  return (
    <div>
      <h1>D Component</h1>
      <p>
        A Component Data: <b>{data.title}</b>
      </p>
    </div>
  );
}
export default D;
