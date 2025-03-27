import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import ResetPasswordForm from "@/components/organisms/ResetPasswordForm";

const gradientStyle = {
    background: "linear-gradient(45deg, rgba(15, 76, 117, 0.3), rgba(10, 90, 80, 0.3), rgba(0, 60, 100, 0.3), rgba(0, 70, 60, 0.3))",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    height: "100vh",
};

export default function ResetPasswordPage() {
    return (
        <div  style={gradientStyle} className="relative overflow-hidden h-screen">
            <div className="flex h-full justify-center items-center px-4">
                <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-150 border-none">
                    <div className="flex flex-col gap-2 p-0 w-full">
                        <div className="mx-auto">
                            <FullLogo />
                        </div>
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
}