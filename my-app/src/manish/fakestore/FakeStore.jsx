import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons"; // Import the regular star icon

import { useEffect, useState } from "react";
import "../Manish.css";

const FakeStore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);
  return (
    <div>
      <h1>Store</h1>
      <div className="product-container">
        {products.map((e) => (
          <div key={e.id} className="product">
            <h2>{e.title}</h2>
            <p>Price: ${e.price}</p>
            <p>{e.description}</p>
            <img className="imgFake" src={e.image} alt={e.title} />
            <div>
              <span>Rating:{e.rating.rate} </span>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <button>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeStore;
