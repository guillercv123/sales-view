import React from "react";
import StepCircle from "@/components/atoms/StepCircle";
import StepLabel from "@/components/atoms/StepLabel";

interface StepperHeaderProps {
    steps: string[];
    currentStep: number;
}

const StepperHeader = ({ steps, currentStep }: StepperHeaderProps) => {
    return (
        <div className="flex justify-between mb-6">
            {steps.map((label, index) => (
                <div key={index} className="flex-1 text-center">
                    <StepCircle isActive={currentStep >= index} label={(index + 1).toString()} />
                    <StepLabel text={label} isCurrent={currentStep === index} />
                </div>
            ))}
        </div>
    );
};

export default StepperHeader;
