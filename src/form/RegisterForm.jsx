import { useState } from "react";

import registerSchema from "../validators/schema/registerSchema";
import validaterFn from "../validators/validatorFn/validatorFunction";
import useAuth from "../hooks/useAuth";
import InputForm from "../components/input/InputForm";
import InputErrorMessage from "../components/input/InputErrorMessage";
import ButtonSky from "../components/button/ButtonSky";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        nickName: "",
        phoneNumber: "",
        birthDate: "",
        gender: "",
        role: "USER",
    });
    const [error, setError] = useState({});

    const { register } = useAuth();

    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
    };

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const validationError = validaterFn(registerSchema, input);
            if (validationError) {
                return setError(validationError);
            }
            register(input);
            navigate("/login");
        } catch (error) {
            console.log(error);
            // toast(error.response?.data.message);
        }
    };
    return (
        <form
            className="grid grid-cols-2 gap-x-3 gap-y-4 "
            onSubmit={handleSubmitForm}
        >
            <div className="col-span-full">
                <InputForm
                    type="email"
                    placeholder="อีเมล"
                    value={input.email}
                    onChange={handleChangeInput}
                    name="email"
                    hasError={error.email}
                />
                {error.email && (
                    <InputErrorMessage message={"กรุณากรอกข้อมูล"} />
                )}
            </div>
            <div className="col-span-full">
                <InputForm
                    placeholder="รหัส"
                    type="password"
                    value={input.password}
                    onChange={handleChangeInput}
                    name="password"
                    hasError={error.password}
                />
                {error.password && (
                    <InputErrorMessage
                        message={"รหัสผ่านต้องมีอย่างน้อย 8 ตัว"}
                    />
                )}
            </div>
            <div className="col-span-full">
                <InputForm
                    placeholder="ยืนยันรหัส"
                    type="password"
                    value={input.confirmPassword}
                    onChange={handleChangeInput}
                    name="confirmPassword"
                    hasError={error.confirmPassword}
                />
                {error.confirmPassword && (
                    <InputErrorMessage
                        message={"รหัสผ่านไม่ตรงกัน ลองอีกครั้ง"}
                    />
                )}
            </div>
            <div>
                <InputForm
                    placeholder="ชื่อจริง"
                    value={input.firstName}
                    onChange={handleChangeInput}
                    name="firstName"
                    hasError={error.firstName}
                />
                {error.firstName && (
                    <InputErrorMessage message={"กรุณากรอกข้อมูล"} />
                )}
            </div>
            <div>
                <InputForm
                    placeholder="นามสกุล"
                    value={input.lastName}
                    onChange={handleChangeInput}
                    name="lastName"
                    hasError={error.lastName}
                />
                {error.lastName && (
                    <InputErrorMessage message={"กรุณากรอกข้อมูล"} />
                )}
            </div>
            <div>
                <InputForm
                    placeholder="ชื่อเล่น"
                    value={input.nickName}
                    onChange={handleChangeInput}
                    name="nickName"
                    hasError={error.nickName}
                />
                {error.nickName && (
                    <InputErrorMessage message={"กรุณากรอกข้อมูล"} />
                )}
            </div>
            <div>
                <InputForm
                    placeholder="เบอร์โทร"
                    value={input.phoneNumber}
                    onChange={handleChangeInput}
                    name="phoneNumber"
                    hasError={error.phoneNumber}
                />
                {error.phoneNumber && (
                    <InputErrorMessage message={"กรุณากรอกข้อมูล"} />
                )}
            </div>
            <div>
                <InputForm
                    type="date"
                    placeholder="วันเกิด"
                    value={input.birthDate}
                    onChange={handleChangeInput}
                    name="birthDate"
                />
            </div>
            <div className="">
                <select
                    name="gender"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.gender}
                    onChange={handleChangeInput}
                >
                    <option value="" disabled selected hidden>
                        เพศ
                    </option>
                    <option value="MALE">ชาย</option>
                    <option value="FEMALE">หญิง</option>
                    <option value="OTHER">อื่น ๆ</option>
                </select>
                {error.gender && <InputErrorMessage message={error.gender} />}
            </div>
            <div className="mx-auto col-span-full">
                <ButtonSky>ยืนยัน</ButtonSky>
            </div>
        </form>
    );
}
