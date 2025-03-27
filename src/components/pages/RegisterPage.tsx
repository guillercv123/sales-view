import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import { Link } from "react-router";
import RegisterForm from "@/components/organisms/RegisterForm";
import bgImage from "@/assets/img/bgfondo.jpg";



const gradientStyleMobile: React.CSSProperties = {
    backgroundImage: window.innerWidth >= 768 ? `url(${bgImage})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
};

const Register = () => {
    return (
        <div
            className="bg-desktop md:bg-cover md:bg-center md:bg-no-repeat h-screen"
            style={gradientStyleMobile}
        >
            <div className="flex h-full justify-center items-center px-4">
                <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative break-words md:w-96 w-full border-none">
                    <div className="flex h-full flex-col justify-center gap-2 p-0 w-full">
                        <div className="mx-auto">
                            <FullLogo />
                        </div>
                        <p className="text-sm text-center text-dark my-3 font-bold">
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