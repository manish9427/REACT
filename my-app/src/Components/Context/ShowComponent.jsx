import { useState } from "react";
import Nav from "../Nav/Nav";

function ShowComponent() {
  const [show, setShow] = useState(false);
  return;
  <div>
    setShow ? <Home /> : <Login />;
  </div>;
}
