import React from "react";
import { cn } from "@/lib/utils";

interface StepLabelProps {
    text: string;
    isCurrent: boolean;
}

const StepLabel = ({ text, isCurrent }: StepLabelProps) => {
    return (
        <p className={cn(
            "text-xs mt-1",
            isCurrent ? "text-primary font-semibold" : "text-muted-foreground"
        )}>
            {text}
        </p>
    );
};

export default StepLabel;
