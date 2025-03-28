import React from "react";
import {Button} from "@/components/ui/button";

interface PrimaryButtonProps {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?: () => void,
    className?: string,
    bgColor?: string,
    variant?: string
}

const ButtonPrimay = ({
                          children,
                          type = "button",
                          onClick,
                          className = "",
                          bgColor = "",
                          variant
                      }: PrimaryButtonProps) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            className={`w-full ${bgColor} text-white rounded-xl ${className}`}
        >
            {children}
        </Button>
    );
};

export default ButtonPrimay;
