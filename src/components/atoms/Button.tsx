import React from "react";
import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    bgColor?: string;
    variant?: string;
}

const ButtonPrimay = ({
                          children,
                          type = "button",
                          onClick,
                          className = "",
                          bgColor = "bg-primary",
                          variant
                      }: PrimaryButtonProps) => {
    return (

        <Button
            variant="outline"
            type={type}
            onClick={onClick}
            className={`
                w-full
            `}
        >
            {children}
        </Button>
    );
};

export default ButtonPrimay;
