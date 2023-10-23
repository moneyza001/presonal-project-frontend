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
        <div className="navbar bg-base-100 flex justify-between sticky top-0 shadow-sm ">
            <div className="btn btn-ghost normal-case text-xl px-16 overflow-hidden">
                <LogoImage
                    adjust="w-20 cursor-pointer"
                    onClick={() => {
                        if (authUser?.role === "ADMIN") {
                            return navigate("/admin");
                        }
                        return navigate("/");
                    }}
                />
            </div>

            <div className="flex items-center justify-center gap-12 px-4 ">
                {(authUser?.role !== "ADMIN" && (
                    <>
                        <TextBox onClick={() => navigate("/")}>
                            หน้าหลัก
                        </TextBox>
                        <TextBox onClick={() => navigate("/service")}>
                            บริการ
                        </TextBox>
                    </>
                )) || (
                    <>
                        <TextBox onClick={() => navigate("/admin")}>
                            หน้าหลัก
                        </TextBox>
                        <TextBox onClick={() => navigate("/admin/editservice")}>
                            จัดการบริการ
                        </TextBox>
                    </>
                )}
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
                    {authUser?.role !== "ADMIN" && authUser && (
                        <div className="dropdown dropdown-end dropdown-hover">
                            <label
                                tabIndex={0}
                                className="btn btn-sm hover:bg-sky-300 bg-sky-200"
                            >
                                การจอง
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-60"
                            >
                                <li onClick={() => navigate("/mybooking")}>
                                    <a>ดูการจอง</a>
                                </li>
                                <li onClick={() => navigate("/booking")}>
                                    <a>ทำการจอง</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}
