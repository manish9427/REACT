import { useState } from "react";
import Profile from "./Profile";
var style = {
  border: "1px solid black",
  margin: "50px auto",
  width: "500px",
  padding: "50px",
};
function ShowProfile(props) {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div style={style}>
      {/* <Profile
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgi0mHDPp-RgniECpPZqhVZ6IxhKUsvKitLMJUCZRAw&s"
        name="Man"
        gender=" Male"
      />
      <Profile
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgkm7GjhoGc6OMHNTi_t1Gd_318YRyTnWU1krG6HyWQ&s"
        name="Woman"
        gender="Female"
      /> */}
      {showProfile ? <Profile /> : <div></div>}
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Show Profile Component
      </button>
      &nbsp;
      <button
        onClick={() => {
          setShowProfile(false);
        }}
      >
        Hide Profile Component
      </button>
    </div>
  );
}

export default ShowProfile;
