import { createContext } from "react";

import axios from "../config/axios";
import { useState } from "react";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
    const [bookingItem, setBookingItem] = useState([]);
    const [bookTime, setBookTime] = useState([]);
    const [bookedItem, setBookedItem] = useState([]);

    const getBookingTarget = async () => {
        const booking = await axios.get("/book");
        setBookingItem(booking.data);
    };

    const getBookingForAdmin = async () => {
        const booking = await axios.get("/book/admin");
        setBookingItem(booking.data);
    };

    const createBooking = async (bookingObj) => {
        try {
            const res = await axios.post("/book", bookingObj);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getBookingTime = async () => {
        try {
            const bookTime = await axios.get("/time");
            setBookTime(bookTime);
        } catch (error) {
            console.log(error);
        }
    };

    const findBookedItem = async (inputObj) => {
        try {
            const findBooked = await axios.post("/book/booked-item", inputObj);
            setBookedItem(findBooked);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BookContext.Provider
            value={{
                getBookingTarget,
                createBooking,
                bookingItem,
                setBookingItem,
                getBookingForAdmin,
                getBookingTime,
                bookTime,
                findBookedItem,
                bookedItem,
                setBookedItem,
            }}
        >
            {children}
        </BookContext.Provider>
    );
}
