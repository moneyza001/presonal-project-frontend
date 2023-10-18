import { createContext, useState, useEffect } from "react";

import {
    addAccessToken,
    getAccessToken,
    removeAccessToken,
} from "../utilities/localStorage";

import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        if (getAccessToken()) {
            axios
                .get("/auth/me")
                .then((res) => {
                    setAuthUser(res.data.user);
                })
                .finally(() => {
                    setInitialLoading(false);
                });
        } else {
            setInitialLoading(false);
        }
    }, []);

    const register = async (InfoInputObject) => {
        await axios.post("/auth/register", InfoInputObject);
    };

    const login = async (userObj) => {
        const res = await axios.post("auth/login", userObj);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    const logout = () => {
        removeAccessToken();
        setAuthUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                register,
                authUser,
                setAuthUser,
                login,
                logout,
                initialLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
