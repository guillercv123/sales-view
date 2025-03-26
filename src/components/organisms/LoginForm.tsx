import React from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Link, useNavigate } from "react-router-dom";

export default function LoginForm() {

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
                        <Label htmlFor="Username">Usuario</Label>
                    </div>
                    <Input
                        id="Username"
                        type="text"

                        required
                        className="form-control form-rounded-xl"
                    />
                </div>
                <div className="mb-4">
                    <div className="mb-2 block">
                        <Label htmlFor="userpwd">Contraseña</Label>
                    </div>
                    <Input
                        id="userpwd"
                        type="password"
                        required
                        className="form-control form-rounded-xl"
                    />
                </div>
                <div className="flex justify-between my-5">
                    <div className="flex items-center gap-2">
                        <Checkbox id="accept" className="checkbox" />
                        <Label
                            htmlFor="accept"
                            className="opacity-90 font-normal cursor-pointer"
                        >
                            Recordar contraseña
                        </Label>
                    </div>
                    <Link to={"/"} className="text-primary text-sm font-medium">
                        Olvide contraseña ?
                    </Link>
                </div>
                <Button type="submit" color={"primary"}  className="w-full bg-primary text-white rounded-xl">
                    Ingresar
                </Button>
            </form>
    )
}
