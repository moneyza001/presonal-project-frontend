import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RedirectIfAuth({ children }) {
    const { authUser } = useAuth();

    if (authUser?.role === "USER") {
        return <Navigate to="/" />;
    }
    if (authUser?.role === "ADMIN") {
        return <Navigate to="/admin" />;
    }
    return children;
}
