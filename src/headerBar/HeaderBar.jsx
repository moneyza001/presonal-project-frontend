import { Outlet } from "react-router-dom";
import Bar from "./Bar";

export default function HeaderBar() {
    return (
        <div>
            <Bar />
            <Outlet />
        </div>
    );
}
