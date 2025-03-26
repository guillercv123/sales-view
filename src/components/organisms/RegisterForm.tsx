import React from "react";
import { useNavigate } from "react-router-dom";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Button } from "../ui/button";

const RegisterForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-4">
                <div className="mb-2 block">
                    <Label htmlFor="name">Nombre</Label>
                </div>
                <Input
                    id="name"
                    type="text"
                    required
                    className="form-control form-rounded-xl"
                />
            </div>
            <div className="mb-4">
                <div className="mb-2 block">
                    <Label htmlFor="email">Email Address</Label>
                </div>
                <Input
                    id="emadd"
                    type="email"
                    required
                    className="form-control form-rounded-xl"
                />
            </div>
            <div className="mb-6">
                <div className="mb-2 block">
                    <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                    id="userpwd"
                    type="password"
                    required
                    className="form-control form-rounded-xl"
                />
            </div>
            <Button color={'primary'} type="submit" className="w-full">Sign Up</Button>

        </form>
    )
}

export default RegisterForm;