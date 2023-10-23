import { useNavigate } from "react-router-dom";
import ButtonSky from "../../components/button/ButtonSky";

export default function AllServiceElement({ allServiceObj }) {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-3 gap-16">
            {allServiceObj.map((el) => (
                <div
                    key={el.id}
                    className="card w-96 bg-base-100 shadow-xl border border-sky-100 hover:bg-sky-50 cursor-pointer"
                    onClick={() => navigate("/booking")}
                >
                    <div className="card-body">
                        <h2 className="card-title">{el.serviceName}</h2>
                        <p>{`เริ่มต้น ` + el.price} </p>

                        <div className="card-actions justify-end">
                            <ButtonSky onClick={() => navigate("/booking")}>
                                จองเลย
                            </ButtonSky>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
