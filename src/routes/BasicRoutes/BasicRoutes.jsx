import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../../Pages/Order/Order/Order";

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
            }
        ]
    },
]);

export default router;