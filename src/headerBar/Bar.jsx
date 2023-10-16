import { useNavigate } from "react-router-dom";

import ButtonRose from "../components/button/ButtonRose";
import ButtonSky from "../components/button/ButtonSky";
import LogoImage from "../components/LogoImage";
import TextBox from "../components/TextBox";
import useAuth from "../hooks/useAuth";

export default function Bar() {
    const navigate = useNavigate();
    const { logout, authUser } = useAuth();

    return (
        <header className="grid grid-cols-3 py-2 px-4 sticky top-0 bg-white">
            <div>
                <LogoImage
                    adjust="w-20 cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className="flex gap-8 items-center justify-center ">
                <TextBox onClick={() => navigate("/")}>หน้าหลัก</TextBox>
                <TextBox onClick={() => navigate("/service")}>บริการ</TextBox>
            </div>
            <div className="flex gap-8 items-center justify-end">
                {authUser ? (
                    <ButtonSky onClick={() => logout()}>ออกจากระบบ</ButtonSky>
                ) : (
                    <ButtonSky onClick={() => navigate("/login")}>
                        เข้าสู่ระบบ
                    </ButtonSky>
                )}
                <ButtonRose onClick={() => navigate("/booking")}>
                    จองคิว
                </ButtonRose>
            </div>
        </header>
    );
}
