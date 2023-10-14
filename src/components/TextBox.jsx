export default function TextBox({ children, onClick }) {
    return (
        <span
            className="cursor-pointer hover:text-sky-500 active:text-rose-500 text-lg"
            onClick={onClick}
        >
            {children}
        </span>
    );
}
