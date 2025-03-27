import React, {useState} from "react";
import StepperHeader from "../molecules/StepperHeader";
import { Card, CardContent } from "../ui/card";
import {Button} from "@/components/ui/button";
import EmailStep from "@/components/molecules/EmailStepProps";
import {showToast} from "@/utils/alert";
import axios from "@/lib/axios";
import CodeStep from "@/components/molecules/CodeStep";
import ResetPasswordStep from "@/components/molecules/ResetPasswordStep";
import {useNavigate} from "react-router-dom";

const steps = ["Confirmación de correo", "Verificación", "Resetear contraseña"];

const ResetPasswordForm = () => {
    const [currentStep, setCurrentStep] = useState(2);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [code, setCode]= useState("");
    const [password, setPassword]= useState("");
    const [passwordConfirm, setPasswordConfirm]= useState("");
    const next = async () => {
        if (currentStep === 0) {
            if (!email) {
                showToast("warning", "El correo es requerido");
                return;
            }
            try {
                const response = await axios.post("/auth/send-reset-code", { email });
                showToast("success", response.data.message || "Código enviado al correo");
                setCurrentStep(1);
            } catch (error: any) {
                showToast("error", error.response?.data?.error || "Hubo un error al enviar el correo");
            }
        } else if(currentStep === 1){
            if (!code) {
                showToast("warning", "Ingrese el código");
                return;
            }
            try {
                const response = await axios.post("/auth/validate-reset-code", { email , code });
                showToast("success", response.data.message || "Código verificado");
                setCurrentStep(2);
            } catch (error: any) {
                showToast("error", error.response?.data?.error || "Hubo un error al enviar el correo");
            }
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };
    const back = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
    const resetPassword = async () => {
        if(password !== passwordConfirm){
            showToast("warning", "Las contraseñas ingresadas no son iguales. Verifícalas e intentá nuevamente.\"");
            return;
        }
        try{
            const response = await axios.post("/users/reset-password", { email, password });
            showToast("success", response.data.message || "Contraseña reseteada");
            navigate('/');
        }catch(error:any){
            showToast("error", error.response?.data?.error || "Hubo un error al enviar el correo");
        }
    };
    return (
        <div className="max-w-lvh">
            <StepperHeader steps={steps} currentStep={currentStep} />

            <Card className="border-none shadow-none">
                <CardContent className="p-6">
                    {currentStep === 0 && <EmailStep email={email} setEmail={setEmail} />}
                    {currentStep === 1 && <CodeStep code={code} setCode={setCode}></CodeStep>}
                    {currentStep === 2 && <ResetPasswordStep password={password} setPassword={setPassword} passwordConfirm={passwordConfirm} setPasswordConfirm={setPasswordConfirm}></ResetPasswordStep>}
                </CardContent>
            </Card>

            <div className="flex justify-between mt-5">
                <Button onClick={back} disabled={currentStep === 0} variant="outline">
                    Atrás
                </Button>
                {currentStep < steps.length - 1 ? (
                    <Button onClick={next}>Siguiente</Button>
                ) : (
                    <Button onClick={resetPassword}>Finalizar</Button>
                )}
            </div>
        </div>
    );
}

export default ResetPasswordForm;