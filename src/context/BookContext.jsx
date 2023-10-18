import { createContext } from "react";

import axios from "../config/axios";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
    const createBooking = async (bookingObj) => {
        try {
            await axios.post("/book", bookingObj);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BookContext.Provider value={{ createBooking }}>
            {children}
        </BookContext.Provider>
    );
}
