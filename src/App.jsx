import Route from "./router/Route";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Route />
            <ToastContainer
                theme="dark"
                position="top-center"
                autoClose={2000}
            />
        </>
    );
}

export default App;
