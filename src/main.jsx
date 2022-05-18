// import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// import App component
import App from "./components/App";
//import css
import "./bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
