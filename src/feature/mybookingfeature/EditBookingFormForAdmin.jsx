import { useState } from "react";

import ButtonSky from "../../components/button/ButtonSky";
import useBook from "../../hooks/useBook";

export default function EditBookingFormForAdmin({ bookedId }) {
    const [input, setInput] = useState({ status: "" });

    const { editBookedStatusForAdmin, getBookingForAdmin, onClose } = useBook();

    const handdleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            await editBookedStatusForAdmin(bookedId, input);
            await getBookingForAdmin();
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <form
            className="flex flex-col items-center "
            onSubmit={handdleSubmitForm}
        >
            <div className="col-span-full">
                <select
                    name="status"
                    className="p-2 rounded-lg w-full block mx-auto"
                    value={input.status}
                    onChange={handleChangeInput}
                >
                    <option value="" disabled selected hidden>
                        เลือกสถานะ
                    </option>
                    <option value="ACCEPTED">ยืนยันการจอง</option>
                    <option value="DENINED">ยกเลิกการจอง</option>
                </select>
                <div className="pt-8">
                    <ButtonSky>ยืนยันการเปลี่ยนแปลง</ButtonSky>
                </div>
            </div>
        </form>
    );
}
