import React from "react";
import LoginForm from "@/components/organisms/LoginForm";
import FullLogo from "@/components/atoms/FullLogo";
import { Link } from "react-router-dom";
import bgImage from "@/assets/img/bgfondo.jpg";
import {cn} from "@/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import RegisterForm from "@/components/organisms/RegisterForm";

const gradientStyleMobile: React.CSSProperties = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
};

export default function LoginPage({
                                      className,
                                      ...props
                                  }: Readonly<React.ComponentPropsWithoutRef<"div">>) {
    return (
        <div className={cn("flex items-center justify-center min-h-screen", className)} {...props}>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-center">
                        <FullLogo />
                    </CardTitle>
                    <CardDescription>
                        <p className="text-sm text-center text-black dark:text-white my-3 transition-colors duration-300">
                            Bienvenido a <span className="font-bold">ComerciApp</span>
                        </p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                    <div className="flex gap-2 text-base font-medium mt-6 items-center justify-center">
                        <Link
                            to="/register"
                            className="text-primary text-sm font-medium hover:underline transition-colors duration-300"
                        >
                            Crear nueva cuenta
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
