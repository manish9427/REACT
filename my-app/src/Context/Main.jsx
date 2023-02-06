import Home from "./Home";
import Login from "./Login";
import { useContext } from "react";
import { ctx } from "./myContext";

function Main() {
  const { isLoggedIn } = useContext(ctx);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}
export default Main;
