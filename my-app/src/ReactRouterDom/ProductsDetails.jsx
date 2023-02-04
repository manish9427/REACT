import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var myStyle = {
  margin: "50px auto",
  padding: "50px",
  width: "300px",
  boxShadow: "0px 0px 10px black",
};
function ProductsDetails() {
  const { id, price } = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  });
  return (
    <div style={myStyle}>
      <h1>Products ID: {id}</h1>
      <img src={state.image} alt="" width={300} height={300} />
      <h1>Price = ${price} </h1>
    </div>
  );
}

export default ProductsDetails;
