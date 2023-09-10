import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/Potville",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "/Potville/:name", element: <App /> },
  { path: "/Potville/shop/:name", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
