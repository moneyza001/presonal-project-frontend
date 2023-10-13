import ButtonRose from "../components/button/ButtonRose";
import ButtonSky from "../components/button/ButtonSky";
import LogoImage from "../components/LogoImage";
import TextBox from "../components/TextBox";

export default function Bar() {
    return (
        <header className="grid grid-cols-3 py-2 px-4 ">
            <div>
                <LogoImage adjust="w-20 cursor-pointer" />
            </div>
            <div className="flex gap-8 items-center justify-center ">
                <TextBox>หน้าหลัก</TextBox>
                <TextBox>บริการ</TextBox>
            </div>
            <div className="flex gap-8 items-center justify-end">
                <ButtonRose>เข้าสู่ระบบ</ButtonRose>
                <ButtonSky>จองคิว</ButtonSky>
            </div>
        </header>
    );
}
