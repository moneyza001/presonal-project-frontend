import { useState } from "react";
import useAuth from "../hooks/useAuth";
import InputForm from "../components/input/InputForm";
import ButtonSky from "../components/button/ButtonSky";
import { useNavigate } from "react-router-dom";
import ButtonRose from "../components/button/ButtonRose";

export default function LoginForm() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const { login } = useAuth();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            console.log(input);
            login(input);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmitForm}>
            <InputForm
                placeholder="Email adress"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
            />
            <InputForm
                type="password"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
            />
            <br />
            <ButtonSky adjust="py-2 rounded-2xl">เข้าสู่ระบบ</ButtonSky>
            <ButtonRose
                adjust="py-2 rounded-2xl"
                onClick={() => navigate("/register")}
            >
                สมัครสมาชิก
            </ButtonRose>
        </form>
    );
}
