import "./index.css";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import AppContext from "./Context/AppContext";
// import AppRouter from "../src/Router/AppRouter";
// import AppRedux from "./Redux/AppRedux/AppRedux";
import AppManish from "./manish/AppManish";
// import { provider } from "react-redux";
// import myStore from "./Redux/reduxStore/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  // <App />
  // {/* <AppContext /> */}
  // {/* <AppRouter /> */}
  <AppManish />
  // </BrowserRouter>
  // <provider store={myStore}>
  //   <AppRedux />
  // </provider>
);
