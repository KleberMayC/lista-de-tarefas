import React from "react";
import ReactDOM from "react-dom/client";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
  </React.StrictMode>
);
