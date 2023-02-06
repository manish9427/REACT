import { useContext } from "react";
import { ctx } from "./myContext";
import { Navigate } from "react-router-dom";
function PrivateComp(children) {
  const { isLoggedIn } = useContext(ctx);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
export default PrivateComp;

// function PrivateComp(props) {
//   return <div>{props.children}</div>;
// }
// export default PrivateComp;
