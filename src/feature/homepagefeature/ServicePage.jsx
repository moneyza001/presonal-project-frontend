import { useNavigate } from "react-router-dom";

import useService from "../../hooks/useService";
import ServiceContent from "../../service/ServiceContent";
import ServiceElements from "../../service/ServiceElements";

export default function ServicePage() {
    const { someService } = useService();
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen">
            <div className=" flex flex-col items-center justify-evenly bg-rose-50  w-2/3 mx-auto h-screen">
                <ServiceContent />
                <div className=" grid grid-cols-2 w-2/3 justify-end gap-20">
                    <ServiceElements serviceObj={someService} />
                </div>
                <div
                    className="self-end px-12 font-extralight cursor-pointer hover:text-sky-500 "
                    onClick={() => navigate("/service")}
                >
                    เพิ่มเติม...
                </div>
            </div>
        </div>
    );
}
