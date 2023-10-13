import LogoImage from "../components/LogoImage";
import RegisterForm from "../form/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="h-screen  flex flex-col items-center justify-start bg-slate-100">
            <LogoImage adjust="w-80" />
            <RegisterForm />
        </div>
    );
}
