import { createContext } from "react";

import axios from "../config/axios";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
    const createBooking = async (bookingObj) => {
        await axios.post("/book", bookingObj);
    };

    return (
        <BookContext.Provider value={{ createBooking }}>
            {children}
        </BookContext.Provider>
    );
}
