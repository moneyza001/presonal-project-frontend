import LoginForm from "./LoginForm";

export default function LoginContents() {
    return (
        <div className="flex flex-col justify-between gap-20">
            <h1 className="text-4xl font-semibold text-center text-sky-700">
                ยินดีต้อนรับ
            </h1>
            <div className="px-16">
                <LoginForm />
            </div>
        </div>
    );
}
