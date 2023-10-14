export default function ButtonSky({
    children,
    onClick,
    adjust = "py-1.5 px-6",
}) {
    const defaultClass =
        "bg-sky-500 hover:bg-sky-600 active:bg-rose-500 text-white rounded-lg ";
    const finalClass = defaultClass + " " + adjust;
    return (
        <button className={finalClass} onClick={onClick}>
            {children}
        </button>
    );
}
