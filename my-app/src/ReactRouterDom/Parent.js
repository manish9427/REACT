import "./Parent.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";
import Products from "./Products";
import ContactUs from "./ContactUs";
import { Route, Routes } from "react-router-dom";

function Parent() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home />
      <Profile />
      <Products />
      <ContactUs /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default Parent;
