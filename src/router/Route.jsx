import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HeaderBar from "../headerBar/HeaderBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllServicePage from "../pages/AllServicePage";
import BookingPage from "../pages/BookingPage";
import Authenticate from "../checkAuth/Authenticate";
import RedirectIfAuth from "../checkAuth/RedirectIfAuth";
import Loading from "../loading/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderBar />,
        children: [
            { path: "", element: <HomePage /> },
            {
                path: "/login",
                element: (
                    <RedirectIfAuth>
                        <LoginPage />
                    </RedirectIfAuth>
                ),
            },
            { path: "/register", element: <RegisterPage /> },
            { path: "/service", element: <AllServicePage /> },
            { path: "/load", element: <Loading /> },
            {
                path: "/booking",
                element: (
                    <Authenticate>
                        <BookingPage />
                    </Authenticate>
                ),
            },
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />;
}
