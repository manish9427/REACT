import Home from "./Home";
import Login from "./Login";
import { useContext } from "react";
import { ctx } from "./myContext";

export default function Main() {
  const { isLoggedIn } = useContext(ctx);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}
