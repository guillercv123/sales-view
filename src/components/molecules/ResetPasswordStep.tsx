import React from "react";
import TextField from "@/components/atoms/TextField";

interface ResetPasswordStepProps {
    password: string;
    setPassword: (value: string) => void;
    passwordConfirm: string;
    setPasswordConfirm: (value: string) => void;
}


const ResetPasswordStep: React.FC<ResetPasswordStepProps> = ({ password, setPassword, passwordConfirm,setPasswordConfirm }) => {
    return (
        <div className="space-y-4">
            <div>
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Nueva contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Repetir contraseña"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                />
            </div>
        </div>
    );
}

export default ResetPasswordStep;