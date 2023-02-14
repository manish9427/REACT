import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import AppContext from "./Context/AppContext";
// import AppRouter from "../src/Router/AppRouter";
import AppRedux from "./Redux/AppRedux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <AppContext /> */}
    {/* <AppRouter /> */}
    <AppRedux />
  </BrowserRouter>
);
