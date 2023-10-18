import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useBook from "../../hooks/useBook";
import InputForm from "../../components/input/InputForm";
import ButtonSky from "../../components/button/ButtonSky";
import makeBookingSchema from "../../validators/schema/bookingSchema";
import validaterFn from "../../validators/validatorFn/validatorFunction";

export default function BookingPage() {
    const [input, setInput] = useState({
        bookDate: "",
        bookTime: "",
        serviceName: "",
        hairStylistId: "",
    });

    const { createBooking } = useBook();
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        input.hairStylistId = +input.hairStylistId;
        const errorObj = validaterFn(makeBookingSchema(), input);
        if (errorObj) {
            return toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
        createBooking(input);
        toast.success("การจองสำเร็จ");
        navigate("/mybooking");
    };

    return (
        <form
            className="grid grid-cols-2 gap-x-3 gap-y-4 "
            onSubmit={handleSubmitForm}
        >
            <div className="col-span-full">
                <InputForm
                    type="date"
                    placeholder="วันที่"
                    value={input.bookDate}
                    onChange={handleChangeInput}
                    name="bookDate"
                />
            </div>

            <div className="col-span-full">
                <InputForm
                    placeholder="เวลา"
                    type="time"
                    value={input.bookTime}
                    onChange={handleChangeInput}
                    name="bookTime"
                />
            </div>

            <div className="">
                <select
                    name="hairStylistId"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.hairStylistId}
                    onChange={handleChangeInput}
                >
                    <option value="" disabled selected hidden>
                        เลือกช่าง
                    </option>
                    <option value="1">Alice</option>
                    <option value="2">Hyper</option>
                </select>
            </div>

            <div className="">
                <select
                    name="serviceName"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.serviceName}
                    onChange={handleChangeInput}
                >
                    <option value="" disabled selected hidden>
                        เลือกบริการ
                    </option>
                    <option value="ตัดผมผู้ชาย">ตัดผมผู้ชาย</option>
                    <option value="ตัดผมผู้หญิง">ตัดผมผู้หญิง</option>
                    <option value="โกนหนวด / แต่งเครา">
                        โกนหนวด / แต่งเครา
                    </option>
                    <option value="สระไดร์">สระ-ไดร์</option>
                    <option value="ทำสี">ทำสีผม</option>
                    <option value="ดัดผม">ดัดผม</option>
                </select>
            </div>
            <div className="mx-auto col-span-full">
                <ButtonSky>ยืนยัน</ButtonSky>
            </div>
        </form>
    );
}
