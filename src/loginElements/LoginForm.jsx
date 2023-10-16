import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../hooks/useAuth";
import InputForm from "../components/input/InputForm";
import ButtonSky from "../components/button/ButtonSky";
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
            // console.log(input);
            login(input);
            // navigate("/");
        } catch (error) {
            toast("test");
            console.log("test");
        }
    };
    // const handleSubmitForm = (e) => {
    //     e.preventDefault();
    //     login(input).catch((error) => {
    //         toast(error.response.data.message);
    //     });
    // };

    return (
        <div className="flex flex-col gap-4">
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
            </form>
            <ButtonRose
                adjust="py-2 rounded-2xl"
                onClick={() => navigate("/register")}
            >
                สมัครสมาชิก
            </ButtonRose>
        </div>
    );
}
