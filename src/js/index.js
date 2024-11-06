//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0;

//render your react application

setInterval(() => {
  ReactDOM.createRoot(document.getElementById("app")).render(
    <SecondsCounter seconds={counter} />
  );
  counter++;
}, 1000);
