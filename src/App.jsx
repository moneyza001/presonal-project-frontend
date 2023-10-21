import { ToastContainer } from "react-toastify";

import Loading from "./loading/Loading";
import useAuth from "./hooks/useAuth";
import Route from "./router/Route";

function App() {
    const { initialLoading } = useAuth();
    if (initialLoading) {
        return <Loading />;
    }

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
