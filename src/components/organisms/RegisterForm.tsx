import React, {useState} from "react";
import { Button } from "../ui/button";
import TextField from "@/components/atoms/TextField";
import axios from "@/lib/axios";

const RegisterForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
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
            console.log('Usuario creado:', response.data);
            clearForm();
        } catch (err) {
            console.error('Error al crear usuario:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="name"
                label="Nombre"
                name="name"
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
            <Button type="submit" className="w-full">
                Ingresar
            </Button>
        </form>
    );
}

export default RegisterForm;