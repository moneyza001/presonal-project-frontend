export default function ServiceElements({ serviceObj }) {
    return (
        <>
            {serviceObj.map((el) => (
                <div key={el.id} className="">
                    <div className="flex flex-col items-center gap-1">
                        <div className="text-2xl">{el.serviceName}</div>
                        <div className="text-xs ">{`เริ่มต้น ` + el.price}</div>
                    </div>
                </div>
            ))}
        </>
    );
}
