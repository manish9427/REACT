import { useContext } from "react";
import { ctx } from "./myContext";
import { Link } from "react-router-dom";
var myStyle = {
  backgroundColor: "black",
  padding: "20px",
  textAlign: "right",
};
var linkStyle = {
  color: "white",
  marginRight: "50px",
  TextDecoration: "none",
};
function Nav() {
  const { isLoggedIn, setIsLoggedIn } = useContext(ctx);
  return (
    <div style={myStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/a">
        Profile
      </Link>
      <Link style={linkStyle} to="/contact">
        ContactUs
      </Link>
      {isLoggedIn && (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogOut
        </button>
      )}
    </div>
  );
}
export default Nav;
