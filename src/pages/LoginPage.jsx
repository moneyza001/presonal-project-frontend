import LoginContent from "../loginElements/LoginContent";
import LoginForm from "../loginElements/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-between">
            <LoginContent />
            <LoginForm />
        </div>
    );
}
