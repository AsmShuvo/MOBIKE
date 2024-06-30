import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PopularBIkes from "../Pages/Home/Popular/PopularBIkes";
import Bikes from "../Pages/Bikes/Bikes";
import Reviews from "../Pages/Home/Reviews/Reviews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BikeDetails from "../Pages/BIkeDetails/BikeDetails";
import Cart from "../Pages/Cart/Cart";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoutes";
import CreateBlog from "../Pages/CreateBlog/CreateBlog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserPanel/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
      {
        path: "/bike-details/:id",
        element: <PrivateRoute><BikeDetails /></PrivateRoute>
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/create-blog",
        element: <CreateBlog />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <UserProfile />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
]);
