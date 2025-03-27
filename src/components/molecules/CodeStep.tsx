import React from "react";
import { Input } from "@/components/ui/input";

interface CodeStepProps {
    code: string;
    setCode: (value: string) => void;
}

const CodeStep: React.FC<CodeStepProps> = ({ code, setCode }) => {
    return (
        <div className="space-y-4">
            <div>
                <p className="text-sm text-muted-foreground">Ingresa el código recibido</p>
                <Input
                    id="email"
                    type="email"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
            </div>
        </div>
    );
};

export default CodeStep;
