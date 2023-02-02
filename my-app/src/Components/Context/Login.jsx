import { useState, useContext } from "react";
import { ctx } from "./myContext";

var myStyle = {
  boxShadow: "0px 0px 10px black",
  margin: "50px auto",
  width: "500px",
  padding: "50px",
};

export default function Login() {
  const { setIsLoggedIn } = useContext(ctx);
  const [state, setState] = useState({
    user: "",
    pass: "",
  });

  const handleLogin = () => {
    if (state.user === "manish9427" && state.pass === "9427") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div style={myStyle}>
      <h1>Login Component</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={state.user}
            onChange={(e) => {
              setState({
                ...state,
                user: e.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={state.pass}
            onChange={(e) => {
              setState({ ...state, pass: e.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}
