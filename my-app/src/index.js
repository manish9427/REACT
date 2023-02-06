import "./index.css";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Context/AppContext";
// import AppRouter from "../src/Router/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    <AppContext />
    {/* <AppRouter /> */}
  </BrowserRouter>
);
