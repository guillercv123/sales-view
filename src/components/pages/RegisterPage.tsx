import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import { Link } from "react-router-dom";
import RegisterForm from "@/components/organisms/RegisterForm";
import {cn} from "@/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const Register: React.FC = ({
                                className,
                                ...props
                            }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={cn("flex items-center justify-center min-h-screen", className)} {...props}>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-center">
                        <FullLogo />
                    </CardTitle>
                    <CardDescription>
                        <h1 className="text-sm text-center text-dark dark:text-white my-3 font-bold transition-colors duration-300">
                            Registrarte
                        </h1>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                    <div className="flex gap-2 text-base font-medium mt-6 items-center justify-center">
                        <p className="text-black dark:text-white transition-colors duration-300">
                            ¿Ya tienes una cuenta?
                        </p>
                        <Link
                            to="/"
                            className="text-primary text-sm font-medium hover:underline transition-colors duration-300"
                        >
                            Ingresar
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;