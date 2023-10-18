import ButtonRose from "../../components/button/ButtonRose";
import ButtonSky from "../../components/button/ButtonSky";
import { useNavigate } from "react-router-dom";

export default function LandingHomePage() {
    const navigate = useNavigate();
    const handdleClick = () => {
        window.location.replace(
            "https://www.instagram.com/adorehairstudio.hdy/"
        );
    };
    return (
        <div className="h-screen w-screen bg-sky-50 flex items-center">
            <div className=" flex flex-col w-2/3 mx-auto justify-center items-center gap-12">
                <div>
                    <h1 className="text-6xl">ADORE HAIR STUDIO </h1>
                </div>
                <div>
                    <h2 className=" font-extralight">
                        ตัดผม ทรงผม ผู้ชาย ผู้หญิง ผู้ใหญ่และเด็ก สระผม
                        โกนหนวดออกแบบทรงผม
                    </h2>
                </div>
                <div className="flex gap-14">
                    <ButtonRose onClick={() => navigate("/booking")}>
                        จองคิว
                    </ButtonRose>
                    <ButtonSky onClick={handdleClick}>Instragram</ButtonSky>
                </div>
            </div>
        </div>
    );
}
