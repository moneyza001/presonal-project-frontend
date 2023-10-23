import { useEffect, useState } from "react";
import dayjs from "dayjs";

import useBook from "../../hooks/useBook";
import useAuth from "../../hooks/useAuth";
import { BinIcon, PenIcon } from "../../icons/Icons";
import EditTableBody from "./EditTableBody";

export default function Mybookingtable({ tableName = "ชื่อช่าง" }) {
    const [editActive, setEditActive] = useState(false);
    const [getBookItemId, setGetBookItemId] = useState("");

    const { authUser } = useAuth();

    const {
        bookingItem,
        getBookingTarget,
        getBookingForAdmin,
        deleteBookedItem,
    } = useBook();

    useEffect(() => {
        if (authUser.role === "USER") {
            getBookingTarget();
        }
        if (authUser.role === "ADMIN") {
            getBookingForAdmin();
        }
    }, []);

    const handdleDeleteBookedItem = async (id) => {
        await deleteBookedItem(id);
        await getBookingTarget();
    };

    return (
        <table className="table-fixed w-10/12 m-auto text-center border">
            <thead className="bg-sky-50  ">
                <tr>
                    <th className="py-3 ">วันที่</th>
                    <th>เวลา</th>
                    <th>{tableName}</th>
                    <th>บริการ</th>
                    {authUser?.role === "ADMIN" && <th>เบอร์โทรลูกค้า</th>}
                    <th>สถานะ</th>
                    {(authUser?.role === "ADMIN" && <th>จัดการสถานะ</th>) || (
                        <th>จัดการการจอง</th>
                    )}
                </tr>
            </thead>

            <tbody className="">
                {bookingItem.map((el) =>
                    editActive ? (
                        el.id === getBookItemId && (
                            <EditTableBody
                                key={el.id}
                                bookingItem={el}
                                setEditActive={() => setEditActive(false)}
                            />
                        )
                    ) : (
                        <tr className="border " key={el.id}>
                            <td className="py-2.5">
                                {dayjs(el?.bookDate).format("DD-MM-YYYY")}
                            </td>
                            <td>{el?.bookTime?.bookTime}</td>
                            {(authUser?.role === "USER" && (
                                <td>{el?.hairStylist?.hairStylistName}</td>
                            )) || (
                                <td>
                                    {el?.user?.memberInfomation?.[0]?.nickName +
                                        " "}
                                    {el?.user?.memberInfomation?.[0]
                                        ?.firstName + " "}
                                </td>
                            )}

                            <td>
                                {el?.bookService?.[0]?.service?.serviceName}
                            </td>

                            {authUser?.role === "ADMIN" && (
                                <td>
                                    {
                                        el?.user?.memberInfomation?.[0]
                                            ?.phoneNumber
                                    }
                                </td>
                            )}

                            <td>
                                {el?.status === "PENDING"
                                    ? "รอการตรวจสอบ"
                                    : el?.status === "ACCEPTED"
                                    ? "ยืนยันการจอง"
                                    : "การจองถูกยกเลิก"}
                            </td>

                            <td>
                                <div className="flex justify-center gap-6 ">
                                    <div
                                        className="tooltip p-1 cursor-pointer "
                                        data-tip="แก้ไขการจอง"
                                    >
                                        <PenIcon
                                            onClick={() => {
                                                setGetBookItemId(el?.id);
                                                setEditActive(!editActive);
                                            }}
                                        />
                                    </div>
                                    {authUser.role === "USER" && (
                                        <div className="p-1 cursor-pointer">
                                            <div
                                                onClick={() =>
                                                    handdleDeleteBookedItem(
                                                        el?.id
                                                    )
                                                }
                                                className="tooltip"
                                                data-tip="ยกเลิกการจอง"
                                            >
                                                <BinIcon />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}
