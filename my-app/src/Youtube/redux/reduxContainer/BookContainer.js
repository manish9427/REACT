import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_Book from "./BookAction";

const style = {
  boxShadow: "0px 0px 10px black",
  width: "300px",
  margin: "10px auto",
  padding: "30px",
};

const BookContainer = () => {
  const ans = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <div style={style}>
      <h1>useSelector</h1>
      <p>No. of Books - {ans}</p>
      <button
        onClick={() => {
          dispatch(purchase_Book());
        }}
      >
        Buy Book
      </button>
    </div>
  );
};

export default BookContainer;

// state => we can write anything
// selector function which is returning value
