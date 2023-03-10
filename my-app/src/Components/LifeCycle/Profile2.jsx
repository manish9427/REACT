import { useState, useEffect } from "react";

var style = {
  width: "400px",
  margin: "50px auto",
  padding: "50px",
  boxShadow: "0px 0px 10px black",
  border: "1px solid black",
};

function Profile2(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log("useEffect Callback is Called");
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=1")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data.results);
        });
    }, 3000);
  }, []);

  // const getData = () => {
  //   console.log("useEffect Callback is Called");
  //   setTimeout(() => {
  //     fetch("https://randomuser.me/api/?results=1")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setState(data.results);
  //       });
  //   }, 3000);
  // };
  // getData();

  console.log("Component rendered");
  return (
    <>
      {state.length > 0 ? (
        <div style={style}>
          <img src="" alt="" width={300} height={300} />
          <h3>Some Pic</h3>
        </div>
      ) : (
        <h2 style={{ color: "red", marginTop: "100px" }}>Loading</h2>
      )}
    </>
  );
}

export default Profile2;
