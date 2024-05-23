import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StartRating from "./components/StartRating.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating maxRating={5} />
    <StartRating maxRating={10} />
  </React.StrictMode>
);