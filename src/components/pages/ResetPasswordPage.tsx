import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import ResetPasswordForm from "@/components/organisms/ResetPasswordForm";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";

const gradientStyle = {
    background: "linear-gradient(45deg, rgba(15, 76, 117, 0.3), rgba(10, 90, 80, 0.3), rgba(0, 60, 100, 0.3), rgba(0, 70, 60, 0.3))",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    height: "100vh",
};

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    return (
        <div  style={gradientStyle} className="relative overflow-hidden h-screen">
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