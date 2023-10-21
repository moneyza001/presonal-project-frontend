import { createContext, useState, useEffect } from "react";

import axios from "../config/axios";

export const ServiceContext = createContext();

export default function ServiceContextProvider({ children }) {
    const [someService, setSomeService] = useState([]);
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        try {
            const getService = async () => {
                const serviceItem = await axios.get("/service");
                const allServiceItem = await axios.get("/service/all");
                setSomeService(serviceItem.data);
                setAllService(allServiceItem.data);
            };
            getService();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <ServiceContext.Provider value={{ allService, someService }}>
            {children}
        </ServiceContext.Provider>
    );
}
