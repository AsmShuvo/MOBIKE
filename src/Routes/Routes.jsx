import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PopularBIkes from "../Pages/Home/Popular/PopularBIkes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <PopularBIkes />,
      },
    ],
  },
]);
