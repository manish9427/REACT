import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "./FakeStore.css";

const FakeStore = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img className="imgFake" src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <div className="rating">
              <span>Rating: {product.rating.rate}</span>
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
