import { createContext, useEffect, useState } from "react";

import { addAccessToken } from "../utilities/localStorage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);

    const register = async (InfoInputObject) => {
        await axios.post("/auth/register", InfoInputObject);
    };

    const login = async (userObj) => {
        const res = await axios.post("auth/login", userObj);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    return (
        <AuthContext.Provider
            value={{ register, authUser, setAuthUser, login }}
        >
            {children}
        </AuthContext.Provider>
    );
}
