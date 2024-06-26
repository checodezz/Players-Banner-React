import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import PlayerList from "../pages/PlayerList";
import Report from "../pages/Report";
import PlayerDetails from "../pages/PlayerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playerlist",
    element: <PlayerList />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/playerlist/:playerId",
    element: <PlayerDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
