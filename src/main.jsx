// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "./context/Authcontext.jsx";
import ServiceContextProvider from "./context/ServiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <AuthContextProvider>
        <ServiceContextProvider>
            <App />
        </ServiceContextProvider>
    </AuthContextProvider>
    //</React.StrictMode>
);
