import React from "react";
import { useSelector } from "react-redux";

const style = {
  boxShadow: "0px 0px 10px black",
  width: "300px",
  margin: "10px auto",
  padding: "30px",
};

const BookContainer = () => {
  const ans = useSelector((state) => state.NumberOfBooks);
  return (
    <div style={style}>
      <h1>useSelector</h1>
      <p>No. of Books - {ans}</p>
    </div>
  );
};

export default BookContainer;

// state => we can write anything
// selector function which is returning value
