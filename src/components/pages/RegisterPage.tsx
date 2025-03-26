import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import { Link } from "react-router";
import RegisterForm from "@/components/organisms/RegisterForm";


const gradientStyle = {
    background: "linear-gradient(45deg, rgba(15, 76, 117, 0.3), rgba(10, 90, 80, 0.3), rgba(0, 60, 100, 0.3), rgba(0, 70, 60, 0.3))",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    height: "100vh",
};

const Register = () => {
    return (
        <div style={gradientStyle} className="relative overflow-hidden h-screen">
            <div className="flex h-full justify-center items-center px-4">
                <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative break-words md:w-96 w-full border-none">
                    <div className="flex h-full flex-col justify-center gap-2 p-0 w-full">
                        <div className="mx-auto">
                            <FullLogo />
                        </div>
                        <p className="text-sm text-center text-dark my-3">
                            Registrarte
                        </p>
                        <RegisterForm />
                        <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
                            <p>Ya tienes una cuenta?</p>
                            <Link to="/" className="text-primary text-sm font-medium">
                                Ingresar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;