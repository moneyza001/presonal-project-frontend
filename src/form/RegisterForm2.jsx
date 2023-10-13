import { useForm } from "react-hook-form";
import ButtonSky from "../components/button/ButtonSky";
import registerSchema from "../validators/schema/registerSchema";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAuth } from "../hooks/useAuth";

export default function RegisterForm() {
    const { register: registerAPI } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        try {
            await registerAPI(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
        >
            <input
                type="email"
                placeholder="Email"
                className="border col-span-full p-2 rounded-lg"
                {...register("email")}
            />
            <input
                type="password"
                placeholder="Password"
                className="border  p-2 rounded-lg"
                {...register("password")}
            />
            <input
                type="password"
                placeholder="Confirm password"
                className="border p-2 rounded-lg"
                {...register("confirmPassword")}
            />
            <input
                type="text"
                placeholder="ชื่อจริง"
                className="border p-2 rounded-lg"
                {...register("firstName")}
            />
            <input
                type="text"
                placeholder="นามสกุล"
                className="border p-2 rounded-lg"
                {...register("lastName")}
            />
            <input
                type="text"
                placeholder="ชื่อเล่น"
                className="border p-2 rounded-lg"
                {...register("nickName")}
            />
            <input
                type="text"
                placeholder="เบอร์โทร"
                className="border p-2 rounded-lg"
                {...register("phoneNumber")}
            />
            <input
                type="date"
                placeholder="วันเกิด"
                className="border p-2 rounded-lg"
                {...register("birthDate")}
            />
            <select
                name="เพศ"
                id="gender"
                className="p-2 rounded-lg"
                {...register("gender")}
            >
                <option value="MALE">ชาย</option>
                <option value="FEMALE">หญิง</option>
                <option value="OTHER">อื่น ๆ</option>
            </select>
            <div className="mx-auto col-span-full">
                <ButtonSky>ยืนยัน</ButtonSky>
            </div>
        </form>
    );
}
