import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./AuthProvider";
import { RouterProvider } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const route = AllRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>
);
