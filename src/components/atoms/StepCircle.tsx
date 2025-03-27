import React from "react";
import { cn } from "@/lib/utils";

interface StepCircleProps {
    isActive: boolean;
    label: string;
}

const StepCircle = ({ isActive, label }: StepCircleProps) => {
    return (
        <div
            className={cn(
                "w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-bold",
                isActive ? "bg-primary text-white" : "bg-muted text-gray-400"
            )}
        >
            {label}
        </div>
    );
};

export default StepCircle;
