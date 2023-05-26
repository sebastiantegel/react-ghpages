import { createHashRouter } from "react-router-dom";
import { Golf } from "./components/Golf";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/golf",
        element: <Golf></Golf>,
      },
    ],
  },
]);
