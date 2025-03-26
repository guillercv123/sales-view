import React from "react"
import LoginForm from "@/components/organisms/LoginForm"
import FullLogo from "@/components/atoms/FullLogo";
import { Link } from "react-router-dom";

const gradientStyle = {
    background: "linear-gradient(45deg, rgba(15, 76, 117, 0.3), rgba(10, 90, 80, 0.3), rgba(0, 60, 100, 0.3), rgba(0, 70, 60, 0.3))",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    height: "100vh",
};

export default function LoginPage() {
    return (
        <div  style={gradientStyle} className="relative overflow-hidden h-screen">
            <div className="flex h-full justify-center items-center px-4">
                <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-96 border-none">
                    <div className="flex flex-col gap-2 p-0 w-full">
                        <div className="mx-auto">
                            <FullLogo />
                        </div>
                        <p className="text-sm text-center text-dark my-3">Bienvenido a MatDash</p>
                        <LoginForm />
                        <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">

                            <Link to="/register" className="text-primary text-sm font-medium">
                                Crear nueva cuenta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
