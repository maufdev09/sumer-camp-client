import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routs/Routs";
import AuthProviders from "./Providers/AuthProviders";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <Toaster></Toaster>
      <RouterProvider router={router} />{" "}
    </AuthProviders>
  </React.StrictMode>
);
