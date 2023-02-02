import { useContext } from "react";
import { ctx } from "../Context/myContext";
var myStyle = {
  display: "flex",
  backgroundColor: "black",
  color: "white",
  justifyContent: "space-evenly",
};
function Nav() {
  const { setIsLoggedIn } = useContext(ctx);
  return (
    <div style={myStyle}>
      <h3>Home</h3>
      <h3>Profile</h3>
      <h3>ContactUs</h3>
      <div style={{ marginTop: "18px" }}>
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
}
export default Nav;
