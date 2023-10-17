import { useNavigate } from "react-router-dom";

import ButtonRose from "../components/button/ButtonRose";
import ButtonSky from "../components/button/ButtonSky";
import LogoImage from "../components/LogoImage";
import TextBox from "../components/TextBox";
import useAuth from "../hooks/useAuth";

export default function Bar2() {
    const navigate = useNavigate();
    const { logout, authUser } = useAuth();

    return (
        <div className="navbar bg-base-100 flex justify-between sticky top-0 ">
            <div className="btn btn-ghost normal-case text-xl px-16">
                <LogoImage
                    adjust="w-20 cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="flex items-center justify-center gap-12 px-4 ">
                <TextBox onClick={() => navigate("/")}>หน้าหลัก</TextBox>
                <TextBox onClick={() => navigate("/service")}>บริการ</TextBox>
            </div>

            <div>
                <ul className="menu menu-horizontal px-1 b gap-4">
                    {authUser ? (
                        <ButtonRose onClick={() => logout()}>
                            ออกจากระบบ
                        </ButtonRose>
                    ) : (
                        <ButtonSky onClick={() => navigate("/login")}>
                            เข้าสู่ระบบ
                        </ButtonSky>
                    )}
                    <li>
                        <details className="px-4 ">
                            <summary>การจอง</summary>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a onClick={() => navigate("/booking")}>
                                        จองคิว
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => navigate("/mybooking")}>
                                        ดูการจอง
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
