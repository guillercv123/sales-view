import React, {useState} from "react";
import StepperHeader from "../molecules/StepperHeader";
import { Card, CardContent } from "../ui/card";
import {Button} from "@/components/ui/button";
import EmailStep from "@/components/molecules/EmailStepProps";
import {showToast} from "@/utils/alert";
import CodeStep from "@/components/molecules/CodeStep";
import ResetPasswordStep from "@/components/molecules/ResetPasswordStep";
import {useNavigate} from "react-router-dom";
import {TOAST_TYPES} from "@/constants/alerts";
import {MESSAGES} from "@/constants/messages";
import {authService} from "@/services/auth.service";
import {userService} from "@/services/user.service";

const steps = ["Confirmación de correo", "Verificación", "Resetear contraseña"];

const ResetPasswordForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [code, setCode]= useState("");
    const [password, setPassword]= useState("");
    const [passwordConfirm, setPasswordConfirm]= useState("");
    const next = async () => {
        if (currentStep === 0) {
            if (!email) {
                showToast(TOAST_TYPES.WARNING, MESSAGES.EMAIL_REQUIRED);
                return;
            }
            try {
                const data = await authService.sendResetCode(email);
                showToast(TOAST_TYPES.SUCCESS, data.message || "Código enviado al correo");
                setCurrentStep(1);
            } catch (error: any) {
                showToast(TOAST_TYPES.ERROR, error.response?.data?.error || "Hubo un error al enviar el correo");
            }
        } else if(currentStep === 1){
            if (!code) {
                showToast(TOAST_TYPES.WARNING, MESSAGES.CODE_REQUIRED);
                return;
            }
            try {
                const data = await authService.validateResetCode(email,code);
                showToast(TOAST_TYPES.SUCCESS, data.message || "Código verificado");
                setCurrentStep(2);
            } catch (error: any) {
                showToast(TOAST_TYPES.ERROR, error.response?.data?.error || "Hubo un error al enviar el correo");
            }
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };
    const back = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
    const resetPassword = async () => {
        if(password !== passwordConfirm){
            showToast(TOAST_TYPES.WARNING, MESSAGES.PASSWORD_MISMATCH);
            return;
        }
        try{
            const data = await userService.resetUserPassword(email, password);
            showToast(TOAST_TYPES.SUCCESS, data.message || "Contraseña reseteada");
            navigate('/');
        }catch(error:any){
            showToast(TOAST_TYPES.ERROR, error.response?.data?.error || "Hubo un error al enviar el correo");
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