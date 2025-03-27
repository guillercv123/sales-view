import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@/components/atoms/TextField";
import axios from "@/lib/axios";
import ButtonPrimay from "@/components/atoms/Button";
import {showToast} from "@/utils/alert";
import {TOAST_TYPES} from "@/constants/alerts";

const RegisterForm = () => {
    const [form, setForm] = useState({
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
            const response = await axios.post("/users/", form);
            showToast(TOAST_TYPES.SUCCESS, response.data.message);
            clearForm();
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (err:any) {
            const message = err?.response?.data?.error || 'Error al registrar usuario';
            showToast(TOAST_TYPES.ERROR, message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="name"
                label="Nombre"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
            />
            <TextField
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <TextField
                id="password"
                label="Contraseña"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <ButtonPrimay bgColor="bg-primary" type="submit">Ingresar</ButtonPrimay>
        </form>
    );
}

export default RegisterForm;