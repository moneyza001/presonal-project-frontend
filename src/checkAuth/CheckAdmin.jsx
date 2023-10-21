import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function CheckAdmin({ children }) {
    const { authUser } = useAuth();

    if (authUser?.role !== "ADMIN") {
        return <Navigate to="/" />;
    }
    return children;
}
