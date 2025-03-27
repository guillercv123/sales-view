import React from "react";
import { Input } from "@/components/ui/input";

interface EmailStepProps {
    email: string;
    setEmail: (value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = ({ email, setEmail }) => {
    return (
        <div className="space-y-4">
            <div>
                <p className="text-sm text-muted-foreground">Ingresa tu correo para recuperar tu contraseña.</p>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
        </div>
    );
};

export default EmailStep;
