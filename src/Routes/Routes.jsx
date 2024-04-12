import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('/realStateData.json'),
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
          loader: ()=> fetch('/realStateData.json'),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/update",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        },
        {
          path: "/user",
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
        },
      ],
    },
  ]);

  export default router;