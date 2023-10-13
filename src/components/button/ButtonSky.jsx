export default function ButtonSky({ children }) {
    return (
        <button className="bg-sky-500 hover:bg-sky-600 active:bg-rose-500 text-white rounded-lg py-1 px-4 ">
            {children}
        </button>
    );
}
