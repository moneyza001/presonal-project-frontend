import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";

import useService from "../../hooks/useService";
import validaterFn from "../../validators/validatorFn/validatorFunction";
import makeEditBookingSchema from "../../validators/schema/EditBookingSchema";
import ButtonSky from "../../components/button/ButtonSky";
import useBook from "../../hooks/useBook";
import { useEffect } from "react";

export default function EditTableBody({ bookingItem, setEditActive }) {
    const [input, setInput] = useState({
        bookTimeId: bookingItem.bookTimeId,
        serviceId: bookingItem.bookService?.[0]?.id,
        hairStylistId: bookingItem.hairStylistId,
    });

    const { allService, hairStylist } = useService();

    const {
        getBookingTime,
        bookTime,
        editBookedItemForUser,
        getBookingTarget,
    } = useBook();

    useEffect(() => {
        getBookingTime();
    }, []);

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitEdit = async (e) => {
        try {
            e.preventDefault();
            input.hairStylistId = +input.hairStylistId;
            input.serviceId = +input.serviceId;
            input.bookTimeId = +input.bookTimeId;

            const errorObj = validaterFn(makeEditBookingSchema(), input);

            if (errorObj) {
                return toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
            }

            const result = await editBookedItemForUser;
            if (result) {
                console.log(input);
                await editBookedItemForUser(bookingItem.id, input);
                await getBookingTarget();
                toast.success("การจองสำเร็จ");
                setEditActive(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <tr className="border ">
            <td className="py-2.5">
                {dayjs(bookingItem?.bookDate).format("DD-MM-YYYY")}
            </td>

            <td>
                <select
                    name="bookTimeId"
                    className="p-2 rounded-lg w-full block mx-auto text-center"
                    value={input.bookTimeId}
                    onChange={handleChangeInput}
                >
                    {bookTime?.data?.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el.bookTime}
                        </option>
                    ))}
                </select>
            </td>

            <td>
                <select
                    name="hairStylistId"
                    className="p-2 rounded-lg w-full block mx-auto text-center"
                    value={input.hairStylistId}
                    onChange={handleChangeInput}
                >
                    {hairStylist.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el.hairStylistName}
                        </option>
                    ))}
                </select>
            </td>

            <td>
                <select
                    name="serviceId"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.serviceId}
                    onChange={handleChangeInput}
                >
                    {allService.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el?.serviceName}
                        </option>
                    ))}
                </select>
            </td>

            <td>
                {bookingItem?.status === "PENDING"
                    ? "รอการตรวจสอบ"
                    : bookingItem?.status === "ACCEPTED"
                    ? "ยืนยันการจอง"
                    : "การจองถูกยกเลิก"}
            </td>

            <td>
                <div
                    className="flex justify-center gap-6 "
                    onClick={handleSubmitEdit}
                >
                    <ButtonSky>ยืนยันการแก้ไข</ButtonSky>
                </div>
            </td>
        </tr>
    );
}
