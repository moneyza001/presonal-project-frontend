import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HeaderBar from "../headerBar/HeaderBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllServicePage from "../pages/AllServicePage";
import BookingPage from "../pages/BookingPage";
import Authenticate from "../checkAuth/Authenticate";
import RedirectIfAuth from "../checkAuth/RedirectIfAuth";
import AdminPage from "../pages/AdminPage";
import MyBookingPage from "../pages/MyBookingPage";
import CheckAdmin from "../checkAuth/CheckAdmin";
import EditService from "../pages/EditService";

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
            {
                path: "/register",
                element: (
                    <RedirectIfAuth>
                        <RegisterPage />
                    </RedirectIfAuth>
                ),
            },
            { path: "/service", element: <AllServicePage /> },
            {
                path: "/booking",
                element: (
                    <Authenticate>
                        <BookingPage />
                    </Authenticate>
                ),
            },
            {
                path: "/mybooking",
                element: (
                    <Authenticate>
                        <MyBookingPage />
                    </Authenticate>
                ),
            },
            {
                path: "/admin",
                element: (
                    <CheckAdmin>
                        <AdminPage />
                    </CheckAdmin>
                ),
            },
            {
                path: "/admin/editservice",
                element: (
                    <CheckAdmin>
                        <EditService />
                    </CheckAdmin>
                ),
            },
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />;
}
