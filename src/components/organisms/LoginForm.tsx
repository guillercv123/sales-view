import React, {useState} from "react"
import TextField from "@/components/atoms/TextField";
import RememberPassword from "@/components/molecules/RememberPassword";
import ButtonPrimay from "../atoms/Button";
import {showToast} from "@/utils/alert";
import {TOAST_TYPES} from "@/constants/alerts";
import {authService} from "@/services/auth.service";
import {LoginInterface} from "@/types/login.interface";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const [form, setForm] = useState<LoginInterface>({
        name: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = await authService.loginUser(form);
            showToast(TOAST_TYPES.SUCCESS, data.message);
            setForm({
                name: '',
                password: '',
            });
            localStorage.setItem("user", JSON.stringify(form.name));
            navigate('/panel');
        } catch (err:any) {
            const message = err?.message || 'Error al registrar usuario';
            showToast(TOAST_TYPES.ERROR, message);
        }
    }

    return (
            <form onSubmit={handleSubmit} >
                <TextField
                    id="name"
                    label="Nombre de Usuario"
                    name="name"
                    required
                    autoComplete="username"
                    value={form.name}
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    label="Contraseña"
                    type="password"
                    autoComplete="password"
                    name="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                />
                <RememberPassword />
                <ButtonPrimay bgColor="bg-primary" type="submit">Ingresar</ButtonPrimay>
            </form>
    )
}
