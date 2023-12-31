import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Detail from "./Pages/Detail.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import Signin from "./Pages/Auth/Signin.jsx";
import Ticket from "./Pages/Ticket";

import { gapi } from "gapi-script";
const clientId =
  "499745642203-gitmi6l7apdog86ibqv6aabmifnrj2na.apps.googleusercontent.com";

  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
