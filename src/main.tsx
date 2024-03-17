import React from "react";
import ReactDOM from "react-dom/client";

import "leaflet-geosearch/dist/geosearch.css";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(
  document.getElementById("cotizadores-react-component")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
