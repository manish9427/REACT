import React from "react";
var myStyle = {
  display: "flex",
  backgroundColor: "black",
  color: "white",
  justifyContent: "space-evenly",
};
function Nav() {
  return (
    <div style={myStyle}>
      <h3>Home</h3>
      <h3>Profile</h3>
      <h3>ContactUs</h3>
      <div style={{ marginTop: "18px" }}>
        <button>LogOut</button>
      </div>
    </div>
  );
}
export default Nav;
