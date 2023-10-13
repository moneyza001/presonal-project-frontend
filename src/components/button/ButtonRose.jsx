export default function ButtonSky({ children }) {
    return (
        <button className="bg-rose-500 hover:bg-rose-600 active:bg-sky-500 text-white rounded-lg py-1 px-4 ">
            {children}
        </button>
    );
}
