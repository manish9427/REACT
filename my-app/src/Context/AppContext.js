import "./AppContext.css";
import { useState } from "react";
import A from "./ContextApi/A";
import Nav from "./Nav";
import Main from "./Main";
import ContactUs from "./ContactUs";
import { ctx } from "./myContext";
import { Routes, Route } from "react-router-dom";
import PrivateComp from "./PrivateComp";

function AppContext() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <ctx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/a"
            element={
              <PrivateComp>
                <A />
              </PrivateComp>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateComp>
                <ContactUs />
              </PrivateComp>
            }
          />
        </Routes>
      </ctx.Provider>

      {/* <ctx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {isLoggedIn && <Nav />}
        <Main />
      </ctx.Provider> */}

      {/* <A /> */}
    </div>
  );
}

export default AppContext;
