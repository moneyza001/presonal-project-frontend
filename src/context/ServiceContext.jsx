import { createContext, useState, useEffect } from "react";

import axios from "../config/axios";

export const ServiceContext = createContext();

export default function ServiceContextProvider({ children }) {
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        try {
            const getService = async () => {
                const serviceItem = await axios.get("/service");
                setAllService(serviceItem.data);
                console.log(serviceItem);
            };
            getService();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <ServiceContext.Provider value={{ allService }}>
            {children}
        </ServiceContext.Provider>
    );
}
