import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@/components/atoms/TextField";
import axios from "@/lib/axios";
import ButtonPrimay from "@/components/atoms/Button";
import {showToast} from "@/utils/alert";

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
            showToast('success', response.data.message);
            clearForm();
            setTimeout(() => {
                navigate('/');
            }, 1500); // pequeño delay para que el toast se muestre
        } catch (err:any) {
            const message = err?.response?.data?.error || 'Error al registrar usuario';
            showToast('error', message);
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