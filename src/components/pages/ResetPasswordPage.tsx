import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import ResetPasswordForm from "@/components/organisms/ResetPasswordForm";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";
import bgImage from "@/assets/img/bgfondo.jpg";


const gradientStyleMobile: React.CSSProperties = {
    backgroundImage: window.innerWidth >= 768 ? `url(${bgImage})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
};

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    return (
        <div
            className="bg-desktop md:bg-cover md:bg-center md:bg-no-repeat h-screen"
            style={gradientStyleMobile}
        >
            <div className="flex h-full justify-center items-center px-4">
                <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-150 border-none">
                    <div className="flex flex-col gap-2 p-0 w-full">
                        <div className="flex items-center justify-center relative mb-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="absolute left-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <ArrowLeft className="h-5 w-5 text-primary" />
                            </button>
                            <FullLogo />
                        </div>
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
}