import React from "react";
import FullLogo from "@/components/atoms/FullLogo";
import ResetPasswordForm from "@/components/organisms/ResetPasswordForm";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";
import bgImage from "@/assets/img/bgfondo.jpg";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const gradientStyleMobile: React.CSSProperties = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
};

export default function ResetPasswordPage({
                                              className,
                                              ...props
                                          }: Readonly<React.ComponentPropsWithoutRef<"div">>) {
    const navigate = useNavigate();

    return (
        <div
            className={cn("flex items-center justify-center min-h-screen", className)}
            {...props}
        >
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl relative flex justify-center items-center mb-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <ArrowLeft className="h-5 w-5 text-primary" />
                        </button>
                        <FullLogo />
                    </CardTitle>
                    <CardDescription>
                        <p className="text-sm text-center text-black dark:text-white transition-colors duration-300">
                            Recupera tu contraseña
                        </p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ResetPasswordForm />
                </CardContent>
            </Card>
        </div>
    );
}
