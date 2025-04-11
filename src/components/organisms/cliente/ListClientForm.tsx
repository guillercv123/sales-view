import {Button} from "@/components/ui/button";
import React from "react";
import {useNavigate} from "react-router-dom";

const ListClientForm = () => {
    const navigate = useNavigate();
    const routerNuevo = ()=> {
        navigate('/panel/nuevoCliente');
    }

    return (
        <div>
            <Button className="py-4 mb-4" onClick={routerNuevo}>Nuevo cliente</Button>
            <div className="aspect-video rounded-xl bg-muted/50">
            </div>
        </div>
    )
}

export default ListClientForm;
