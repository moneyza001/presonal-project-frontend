export default function ButtonRose({
    children,
    onClick,
    adjust = "py-1.5 px-6",
}) {
    const defaultClass =
        "bg-rose-500 hover:bg-rose-600 active:bg-sky-500 text-white rounded-lg ";
    const finalClass = defaultClass + " " + adjust;
    return (
        <button className={finalClass} onClick={onClick}>
            {children}
        </button>
    );
}
