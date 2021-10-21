import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
/* Elrond DApp styles */
import "./assets/theme.scss";

function Main() {
  return (
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default ReactDOM.render(<Main />, document.getElementById("root"));
