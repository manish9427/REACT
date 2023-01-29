import { useState } from "react";
var profileStyle = {
  boxShadow: "0px 0px 10px black",
  width: "400px",
  margin: "0px auto 50px",
  padding: "50px",
};
function Profile(props) {
  const [data, setData] = useState({
    image:
      "https://th.bing.com/th/id/OIP.KndzFm8qCrAikcfH0RBFXAHaE7?pid=ImgDet&rs=1",
    name: "Chris John",
    gender: "Male",
  });

  const changeUser = () => {
    setData({
      image:
        "https://th.bing.com/th/id/OIP.-8v1B3AmqbhdJzt1nHvYPgHaE8?pid=ImgDet&rs=1",
      name: "Sneha Verma",
      gender: "Female",
    });
  };

  return (
    <div style={profileStyle}>
      <img src={data.image} alt="" width="300px" height={300} />
      <h1>{data.name}</h1>
      <p>{data.gender}</p>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
}
export default Profile;
