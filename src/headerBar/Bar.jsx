import { useNavigate } from "react-router-dom";

import ButtonRose from "../components/button/ButtonRose";
import ButtonSky from "../components/button/ButtonSky";
import LogoImage from "../components/LogoImage";
import TextBox from "../components/TextBox";

export default function Bar() {
    const navigate = useNavigate();
    return (
        <header className="grid grid-cols-3 py-2 px-4 sticky top-0 bg-white">
            <div>
                <LogoImage adjust="w-20 cursor-pointer" />
            </div>
            <div className="flex gap-8 items-center justify-center ">
                <TextBox onClick={() => navigate("/")}>หน้าหลัก</TextBox>
                <TextBox onClick={() => navigate("/service")}>บริการ</TextBox>
            </div>
            <div className="flex gap-8 items-center justify-end">
                <ButtonRose onClick={() => navigate("/login")}>
                    เข้าสู่ระบบ
                </ButtonRose>
                <ButtonSky onClick={() => navigate("/booking")}>
                    จองคิว
                </ButtonSky>
            </div>
        </header>
    );
}
