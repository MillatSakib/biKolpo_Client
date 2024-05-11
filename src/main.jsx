import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LayOut from "./LayOut";
import AuthProvider from "./AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
