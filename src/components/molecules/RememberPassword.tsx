import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const RememberPassword = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-5 gap-3">
            <div className="flex items-center gap-2">
                <Checkbox id="remember" className="checkbox" />
                <Label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground cursor-pointer"
                >
                    Recordar contraseña
                </Label>
            </div>
            <Link
                to="/"
                className="text-sm font-medium text-primary hover:underline transition-all"
            >
                ¿Olvidaste tu contraseña?
            </Link>
        </div>
    );
};

export default RememberPassword;
