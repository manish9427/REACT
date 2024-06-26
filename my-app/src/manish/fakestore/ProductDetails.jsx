import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "./FakeStore.css"
import { useParams,useLocation } from "react-router-dom";
export  const ProductDetails = () => {
    const {state} = useLocation();
    const {product} = state;
    const {id} =useParams();
    return (
    <div >
        <div className="product-details">
            <img className="imgDetails" src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <div className="rating">
              <span>Product Rating: {product.rating.rate}</span>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
      </div>);

}