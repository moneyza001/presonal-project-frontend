import { useContext } from "react";

import { BookContext } from "../context/BookContext";

export default function useBook() {
    return useContext(BookContext);
}
