import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeaderBar from "../headerBar/HeaderBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderBar />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />;
}
