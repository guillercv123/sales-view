import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
    id: string;
    label: string;
    type?: string;
    autoComplete?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const TextField = ({
                       id,
                       label,
                       type = "text",
                       autoComplete,
                       name,
                       value,
                       onChange,
                       required
                   }: Props) => {
    return (
        <div className="mb-4 text-gray-700 dark:text-gray-200">
            <div className="mb-2 block">
                <Label htmlFor={id}>
                    {label}
                </Label>
            </div>
            <Input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                required={required}
                />
        </div>
    );
};

export default TextField;
