import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

import useBook from "../../hooks/useBook";
import useService from "../../hooks/useService";
import InputForm from "../../components/input/InputForm";
import ButtonSky from "../../components/button/ButtonSky";
import makeBookingSchema from "../../validators/schema/bookingSchema";
import validaterFn from "../../validators/validatorFn/validatorFunction";

export default function BookingForm() {
    const [input, setInput] = useState({
        bookDate: "",
        bookTimeId: "",
        serviceId: "",
        hairStylistId: "",
    });

    const {
        createBooking,
        getBookingTarget,
        getBookingTime,
        bookTime,
        findBookedItem,
        bookedItem,
        setBookedItem,
    } = useBook();

    const { allService } = useService();

    useEffect(() => {
        getBookingTime();
    }, []);

    useEffect(() => {
        if (input.bookDate !== "" && input.hairStylistId !== "") {
            findBookedItem(input).then((res) => {
                setBookedItem(res.data?.[0]);
            });
        }
    }, [input.bookDate, input.hairStylistId]);

    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // console.log(bookedItem?.data);
    // console.log(bookTime.data);

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            input.hairStylistId = +input.hairStylistId;
            input.serviceId = +input.serviceId;
            input.bookTimeId = +input.bookTimeId;

            const errorObj = validaterFn(makeBookingSchema(), input);

            if (errorObj) {
                return errorObj.bookDate
                    ? toast.error("วันที่ต้องมากกว่าหรือเท่ากับวันปัจจุบัน")
                    : toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
            }

            const result = await createBooking(input);
            if (result) {
                await getBookingTarget();
                toast.success("การจองสำเร็จ");
                navigate("/mybooking");
                return;
            }
        } catch (error) {
            console.log(error);
        }
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
                </select>
            </div>

            <div className="">
                <select
                    name="bookTimeId"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.bookTimeId}
                    onChange={handleChangeInput}
                >
                    <option value="" disabled hidden>
                        เลือกเวลา
                    </option>

                    {bookTime.data?.map((el) => {
                        <option key={el.id} value={el.id}>
                            {el.bookTime}
                        </option>;
                    })}
                </select>
            </div>

            <div className="">
                <select
                    name="serviceId"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.serviceId}
                    onChange={handleChangeInput}
                >
                    <option value="" disabled hidden>
                        เลือกบริการ
                    </option>
                    {allService.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el?.serviceName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mx-auto col-span-full">
                <ButtonSky>ยืนยัน</ButtonSky>
            </div>
        </form>
    );
}
