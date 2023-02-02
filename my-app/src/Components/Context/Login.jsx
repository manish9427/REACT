import React from "react";
var myStyle = {
  boxShadow: "0px 0px 10px black",
  margin: "50px auto",
  width: "500px",
  padding: "50px",
};
export default function Login() {
  return (
    <div style={myStyle}>
      <h1>Login Component</h1>
      <form>
        <div>
          <input type="text" placeholder="Enter Email" />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Enter Password" />
        </div>
        <br />
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
