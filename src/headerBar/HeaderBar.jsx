import { Outlet } from "react-router-dom";
// import Bar from "./Bar";
import Bar from "./Bar2";

export default function HeaderBar() {
    return (
        <div>
            {/* <Bar /> */}
            <Bar />
            <Outlet />
        </div>
    );
}
