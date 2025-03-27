import React from "react"
import LoginForm from "@/components/organisms/LoginForm"
import FullLogo from "@/components/atoms/FullLogo";
import { Link } from "react-router-dom";
import bgImage from "@/assets/img/bgfondo.jpg";

const gradientStyleMobile: React.CSSProperties = {
    backgroundImage: window.innerWidth >= 768 ? `url(${bgImage})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
};



export default function LoginPage() {
    return (
        <div
            className="bg-desktop md:bg-cover md:bg-center md:bg-no-repeat h-screen"
            style={gradientStyleMobile}
        >
            <div className="flex h-full justify-center items-center px-4">
                <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-96 border-none">
                    <div className="flex flex-col gap-2 p-0 w-full">
                        <div className="mx-auto">
                            <FullLogo />
                        </div>
                        <p className="text-sm text-center text-dark my-3">Bienvenido a <span className="font-bold">ComerciApp</span></p>
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
