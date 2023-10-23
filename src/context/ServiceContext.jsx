import { createContext, useState, useEffect } from "react";

import axios from "../config/axios";

export const ServiceContext = createContext();

export default function ServiceContextProvider({ children }) {
    const [someService, setSomeService] = useState([]);
    const [allService, setAllService] = useState([]);
    const [hairStylist, setHairStylist] = useState([]);

    useEffect(() => {
        try {
            const getService = async () => {
                const serviceItem = await axios.get("/service");
                setSomeService(serviceItem.data);

                const allServiceItem = await axios.get("/service/all");
                setAllService(allServiceItem.data);

                const hairStylists = await axios.get("/service/hairStylist");
                setHairStylist(hairStylists.data);
            };
            getService();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <ServiceContext.Provider
            value={{ allService, someService, hairStylist }}
        >
            {children}
        </ServiceContext.Provider>
    );
}
