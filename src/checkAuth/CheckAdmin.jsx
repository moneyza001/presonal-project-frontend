import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function CheckAdmin({ children }) {
    const { authUser } = useAuth();

    console.log(authUser);
    if (authUser?.role !== "admin") {
        return <Navigate to="/" />;
    }
    return children;
}
