import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@/components/atoms/TextField";
import ButtonPrimay from "@/components/atoms/Button";
import { showToast } from "@/utils/alert";
import { TOAST_TYPES } from "@/constants/alerts";
import { userService } from "@/services/user.service";
import { IUser } from "@/types/user.interface";

const RegisterForm: React.FC = () => {
    const [form, setForm] = useState<IUser>({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const clearForm = () => {
        setForm({
            name: '',
            email: '',
            password: '',
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await userService.createUser(form);
            showToast(TOAST_TYPES.SUCCESS, data.message);
            clearForm();
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (err: any) {
            const message = err?.message || 'Error al registrar usuario';
            showToast(TOAST_TYPES.ERROR, message);
        }
    };

    return (
            <form onSubmit={handleSubmit}>
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
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="password"
                    label="Contraseña"
                    autoComplete="current-password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <ButtonPrimay
                    type="submit"
                >
                    Ingresar
                </ButtonPrimay>
            </form>
    );
}

export default RegisterForm;
