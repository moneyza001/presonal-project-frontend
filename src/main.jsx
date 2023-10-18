// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "./context/Authcontext.jsx";
import ServiceContextProvider from "./context/ServiceContext.jsx";
import BookContextProvider from "./context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <AuthContextProvider>
        <ServiceContextProvider>
            <BookContextProvider>
                <App />
            </BookContextProvider>
        </ServiceContextProvider>
    </AuthContextProvider>
    //</React.StrictMode>
);
