import { useEffect } from "react";
import dayjs from "dayjs";

import useBook from "../../hooks/useBook";
import useAuth from "../../hooks/useAuth";

export default function Mybookingtable({ tableName = "ชื่อช่าง" }) {
    const { authUser } = useAuth();
    const { bookingItem, getBookingTarget, getBookingForAdmin } = useBook();

    useEffect(() => {
        if (authUser.role === "USER") {
            getBookingTarget();
        }
        if (authUser.role === "ADMIN") {
            getBookingForAdmin();
        }
    }, []);

    return (
        <table className="table-fixed w-10/12 m-auto text-center border">
            <thead className="bg-sky-50 ">
                <tr>
                    <th className="py-1.5 ">วันที่</th>
                    <th>เวลา</th>
                    <th>{tableName}</th>
                    <th>บริการ</th>
                    <th>สถานะ</th>
                    {(authUser?.role === "ADMIN" && <th>จัดการสถานะ</th>) || (
                        <th>จัดการการจอง</th>
                    )}
                </tr>
            </thead>
            <tbody className="py-1">
                {bookingItem.map((el) => (
                    <tr className="border " key={el.id}>
                        <td>{dayjs(el?.bookDate).format("DD-MM-YYYY")}</td>
                        <td>{el?.bookTime}</td>
                        {(authUser?.role === "USER" && (
                            <td>{el?.hairStylist?.hairStylistName}</td>
                        )) || (
                            <td>
                                {el?.user?.memberInfomation?.[0]?.nickName +
                                    " "}
                                {el?.user?.memberInfomation?.[0]?.firstName +
                                    " "}
                            </td>
                        )}
                        <td>{el?.bookService?.[0]?.service?.serviceName}</td>
                        <td>{el?.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
