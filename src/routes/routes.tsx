import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ClothDetails from "../pages/Home/Cloths/ClothDetails";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";
import AllWinterCloth from "../pages/AllWinterCloth/AllWinterCloth";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cloth/:id",
        element: <ClothDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/all-winter-cloth",
        element: <AllWinterCloth />,
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
