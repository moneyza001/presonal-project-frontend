export default function InputForm({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    hasError,
}) {
    return (
        <input
            type={type}
            className={`block w-full border rounded-md outline-none px-3 py-2 text-sm focus:ring 
            ${
                hasError
                    ? `border-red-500 focus:ring-red-300`
                    : `focus:ring-sky-300 focus:border-sky-500 border-gray-300`
            }`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
}
