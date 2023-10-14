import LoginContents from "../loginElements/LoginContents";
import LoginImage from "../loginElements/LoginImage";

export default function LoginPage() {
    return (
        <div className="flex justify-evenly h-screen">
            <div className="flex flex-1 items-center pb-[-40rem]">
                <LoginImage />
            </div>
            <div className="flex-1 p-40 h-1/2">
                <LoginContents />
            </div>
        </div>
    );
}
