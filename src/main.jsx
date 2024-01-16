import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
