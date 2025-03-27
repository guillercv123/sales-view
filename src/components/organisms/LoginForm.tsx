import React, {useState} from "react"
import axios from "@/lib/axios";
import TextField from "@/components/atoms/TextField";
import RememberPassword from "@/components/molecules/RememberPassword";
import ButtonPrimay from "../atoms/Button";
import {showToast} from "@/utils/alert";
import {TOAST_TYPES} from "@/constants/alerts";

export default function LoginForm() {
    const [form, setForm] = useState({
        name: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post("/login/", form);
            showToast(TOAST_TYPES.SUCCESS, response.data.message);
        } catch (err:any) {
            const message = err?.response?.data?.error || 'Error al registrar usuario';
            showToast(TOAST_TYPES.ERROR, message);
        }
    }

    return (
            <form onSubmit={handleSubmit} >
                <TextField
                    id="name"
                    label="Nombre"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    label="Contraseña"
                    type="password"
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
