import React from "react";
import { useParams,useLocation } from "react-router-dom";
export  const ProductDetails = () => {
    const {state} = useLocation();
    const {product} = state;
    const {id} =useParams();
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )

}