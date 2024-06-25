import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PopularBIkes from "../Pages/Home/Popular/PopularBIkes";
import Bikes from "../Pages/Bikes/Bikes";
import Reviews from "../Pages/Home/Reviews/Reviews";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
        path: "/popularBikes",
        element: <PopularBIkes />,
      },
      {
        path: "/bikes",
        element: <Bikes />,
      },
      {
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ],
  },
]);
