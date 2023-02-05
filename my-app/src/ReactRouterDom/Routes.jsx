import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import Products from "./Products";
import ContactUs from "./ContactUs";
import Users from "./Users";
import ProductsDetails from "./ProductsDetails";
import { Route, Routes } from "react-router-dom";
import Page from "./Page";

function RoutesComp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/users" element={<Users />} />
      <Route path="/productsdetails/:id/:price" element={<ProductsDetails />} />
      <Route path="*" element={<Page />} />
    </Routes>
  );
}
export default RoutesComp;
