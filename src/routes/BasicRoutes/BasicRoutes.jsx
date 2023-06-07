import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Secret from "../../Pages/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../layouts/Dashboard";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/our-menu",
                element: <OurMenu />
            },
            {
                path: "/order/:category",
                element: <Order />
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
                path: "/secret",
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ]
    },

    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "my-cart",
                element: <MyCart />
            },
            {
                path: "all-users",
                element: <AllUsers />
            }
        ]
    }
]);

export default router;